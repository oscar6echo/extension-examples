import { LabIcon } from '@jupyterlab/ui-components';

// import vueSvgstr from '../style/icons/vue.svg';

const vueSvgstr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="24" height="24">
    <g class="jp-icon-brand2 jp-icon-selectable">
        <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"></path>
        <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"></path>
    </g>
</svg>
`;

export const vueIcon = new LabIcon({
  name: 'ui-components:vue',
  svgstr: vueSvgstr,
});
