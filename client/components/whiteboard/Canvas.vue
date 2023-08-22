<script setup>
import { ref, onMounted, toRefs, watch } from "vue";

const props = defineProps({
  tool: String,
  color: String,
  lineWidth: Number,
});

const { tool, color, lineWidth } = toRefs(props);

const canvas = ref(null);
const isDrawing = ref(false);

let context;
let canvasBounds;

onMounted(() => {
  if (canvas.value) {
    context = canvas.value.getContext("2d", { willReadFrequently: true });

    // Set the canvas's internal dimensions to match the viewport's dimensions
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;

    canvasBounds = canvas.value.getBoundingClientRect();

    drawDottedBackground(canvas.value, context);

    window.addEventListener("resize", () => {
      if (canvas.value) {
        // Update canvas dimensions and bounds on window resize
        canvas.value.width = window.innerWidth;
        canvas.value.height = window.innerHeight;
        canvasBounds = canvas.value.getBoundingClientRect();

        // Redraw the background after resizing
        drawDottedBackground(canvas.value, context);
      }
    });
  }
});

const clear = () => {
  if (context) {
    context.clearRect(0, 0, canvas.value.width, canvas.value.height);
  }
  drawDottedBackground(canvas.value, context);
};

watch(color, (newColor) => {
  if (context) {
    context.strokeStyle = newColor;
  }
});

watch(lineWidth, (newLineWidth) => {
  if (context) {
    context.lineWidth = newLineWidth;
  }
});

let canvasState;

const startDrawing = (event) => {
  isDrawing.value = true;
  startX = event.clientX - canvasBounds.left;
  startY = event.clientY - canvasBounds.top + 64;

  // Save the current state of the canvas
  canvasState = context.getImageData(
    0,
    0,
    canvas.value.width,
    canvas.value.height
  );

  context.beginPath();
};

const stopDrawing = () => {
  isDrawing.value = false;
  context.beginPath();
};

function drawDottedBackground(canvas, context) {
  const dotRadius = 2; // Size of each dot
  const spacing = 40; // Distance between dots

  for (let x = 0; x < canvas.width; x += spacing) {
    for (let y = 0; y < canvas.height; y += spacing) {
      context.beginPath();
      context.arc(x, y, dotRadius, 0, 2 * Math.PI);
      context.fillStyle = "#D3D3D3";
      context.fill();
    }
  }
}

let startX, startY; // Starting X,Y coordinates for shapes

const draw = (event) => {
  if (!isDrawing.value) return;

  context.strokeStyle = color.value;
  context.lineWidth = lineWidth.value;

  let rect;

  switch (tool.value) {
    case "pen":
      context.lineTo(
        event.clientX - canvasBounds.left,
        event.clientY - canvasBounds.top + 64
      );
      context.stroke();
      context.beginPath();
      context.moveTo(
        event.clientX - canvasBounds.left,
        event.clientY - canvasBounds.top + 64
      );
      break;

    case "square":
      context.putImageData(canvasState, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);
      rect = {
        left: Math.min(startX, event.clientX - canvasBounds.left),
        top: Math.min(startY, event.clientY - canvasBounds.top + 64),
        width: Math.abs(startX - (event.clientX - canvasBounds.left)),
        height: Math.abs(startY - (event.clientY - canvasBounds.top + 64)),
      };
      context.strokeRect(rect.left, rect.top, rect.width, rect.height);
      break;

    case "circle":
      context.putImageData(canvasState, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);
      let radius = Math.sqrt(
        Math.pow(startX - (event.clientX - canvasBounds.left), 2) +
          Math.pow(startY - (event.clientY - canvasBounds.top + 64), 2)
      );
      context.beginPath();
      context.arc(startX, startY, radius, 0, 2 * Math.PI);
      context.stroke();
      break;

    case "text":
      createTextInput(event.clientX, event.clientY);
      break;

    case "eraser":
      context.globalCompositeOperation = "destination-out";
      context.beginPath();
      context.arc(
        event.clientX - canvasBounds.left,
        event.clientY - canvasBounds.top + 64,
        lineWidth.value * 4,
        0,
        Math.PI * 2,
        false
      );
      context.fill();
      context.globalCompositeOperation = "source-over";
      break;

    default:
      console.log("Unknown tool");
  }
};

const createTextInput = (x, y) => {
  context.font = `${lineWidth.value * 5}px Arial`;

  const input = document.createElement("input");
  input.style.fontSize = `${lineWidth.value * 5}px`;
  input.style.position = "absolute";
  input.style.left = `${x}px`;
  input.style.top = `${y}px`;
  input.style.transform = `translate(-50%, -50%)`;
  input.style.backgroundColor = "white";
  input.style.border = "1px solid gray";
  input.style.outline = "none";
  input.style.padding = "4px";
  input.style.fontSize = `${lineWidth.value}px`; // Adjust as needed

  document.body.appendChild(input);
  input.focus();

  input.addEventListener("blur", () => {
    const value = input.value;
    context.fillText(value, x - canvasBounds.left, y - canvasBounds.top + 64);
    document.body.removeChild(input);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      input.blur();
    }
  });
};

defineExpose({
  canvas,
  startDrawing,
  stopDrawing,
  draw,
  clear,
});
</script>

<template>
  <canvas
    ref="canvas"
    @mousedown="startDrawing"
    @mouseup="stopDrawing"
    @mousemove="draw"
  ></canvas>
</template>
