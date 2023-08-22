import {createTheme} from 'thememirror';
import {tags as t} from '@lezer/highlight';

const darkDuopen = createTheme({
	variant: 'dark',
	settings: {
		background: '#0f172a',
		foreground: '#ffffff',
		caret: '#818cf8',
		selection: '#036dd626',
		lineHighlight: '#8a91991a',
		gutterBackground: '#0f172a',
		gutterForeground: '#8a919966',
	},
	styles: [
		{
			tag: t.comment,
			color: '#639c67',
		},
		{
			tag: t.variableName,
			color: '#d1d3d6',
		},
		{
			tag: [t.string, t.special(t.brace)],
			color: '#1cbaa8',
		},
		{
			tag: t.number,
			color: '#f25926',
		},
		{
			tag: t.bool,
			color: '#cf2648',
		},
		{
			tag: t.null,
			color: '#4f5254',
		},
		{
			tag: t.keyword,
			color: '#818cf8',
		},
		{
			tag: t.operator,
			color: '#ffffff',
		},
		{
			tag: t.className,
			color: '#ffffff',
		},
		{
			tag: t.definition(t.typeName),
			color: '#ffffff',
		},
		{
			tag: t.typeName,
			color: '#818cf8',
		},
		{
			tag: t.angleBracket,
			color: '#ffffff',
		},
		{
			tag: t.tagName,
			color: '#ffffff',
		},
		{
			tag: t.attributeName,
			color: '#662f92',
		},
	],
});

export default darkDuopen;