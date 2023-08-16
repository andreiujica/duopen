import {createTheme} from 'thememirror';
import {tags as t} from '@lezer/highlight';

const lightDuopen = createTheme({
	variant: 'light',
	settings: {
		background: '#ffffff',
		foreground: '#000000',
		caret: '#818cf8',
		selection: '#036dd626',
		lineHighlight: '#8a91991a',
		gutterBackground: '#ffffff',
		gutterForeground: '#000000',
	},
	styles: [
		{
			tag: t.comment,
			color: '#639c67',
		},
		{
			tag: t.variableName,
			color: '#000000',
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
			color: '#000000',
		},
		{
			tag: t.className,
			color: '#000000',
		},
		{
			tag: t.definition(t.typeName),
			color: '#000000',
		},
		{
			tag: t.typeName,
			color: '#818cf8',
		},
		{
			tag: t.angleBracket,
			color: '#000000',
		},
		{
			tag: t.tagName,
			color: '#000000',
		},
		{
			tag: t.attributeName,
			color: '#662f92',
		},
	],
});

export default lightDuopen;