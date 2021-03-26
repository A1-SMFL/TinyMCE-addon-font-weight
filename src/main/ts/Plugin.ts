import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {

  editor.ui.registry.addIcon('font-weight', 
  `<svg
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 15.744203 10.766434"
  version="1.1"
  id="svg8">
 <defs
    id="defs2">
   <rect
      x="182.5625"
      y="49.136906"
      width="160.2619"
      height="146.65475"
      id="rect837" />
 </defs>
 <metadata
    id="metadata5">
   <rdf:RDF>
     <cc:Work
        rdf:about="">
       <dc:format>image/svg+xml</dc:format>
       <dc:type
          rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
       <dc:title></dc:title>
     </cc:Work>
   </rdf:RDF>
 </metadata>
 <g
    id="layer1"
    transform="translate(-86.456583,-52.266928)">
   <g
      aria-label="B"
      transform="matrix(1.4211724,0,0,1.4211724,-170.40132,-20.520467)"
      id="text835"
      style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;white-space:pre;shape-inside:url(#rect837);fill:#000000;fill-opacity:1;stroke:none">
     <path
        d="m 183.33764,51.216443 h 3.02823 q 0.89917,0 1.33842,0.07751 0.44441,0.07235 0.79065,0.310058 0.35139,0.237711 0.58394,0.635618 0.23254,0.39274 0.23254,0.883664 0,0.532266 -0.28939,0.976682 -0.28422,0.444416 -0.77514,0.666624 0.69246,0.201537 1.06453,0.687294 0.37207,0.485757 0.37207,1.142045 0,0.516763 -0.24288,1.007688 -0.23771,0.485757 -0.65629,0.780311 -0.41341,0.289387 -1.02319,0.356567 -0.3824,0.04134 -1.84484,0.05168 h -2.57865 z m 1.52962,1.260901 v 1.751825 h 1.00252 q 0.894,0 1.11104,-0.02584 0.39274,-0.04651 0.61495,-0.268716 0.22737,-0.227376 0.22737,-0.594277 0,-0.351399 -0.19637,-0.568439 -0.1912,-0.222208 -0.5736,-0.268717 -0.22738,-0.02584 -1.30741,-0.02584 z m 0,3.012726 v 2.02571 h 1.41593 q 0.82682,0 1.04903,-0.04651 0.34106,-0.06201 0.55294,-0.299722 0.21704,-0.242878 0.21704,-0.645953 0,-0.341064 -0.16537,-0.578774 -0.16536,-0.237711 -0.48059,-0.346231 -0.31006,-0.108521 -1.35392,-0.108521 z"
        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:Arial;-inkscape-font-specification:'Arial Bold'"
        id="path855" />
   </g>
   <g
      id="g915"
      transform="matrix(1.1993186,0,0,0.66889013,-18.858124,18.98789)"
      style="fill:#333333">
     <path
        id="rect844"
        style="fill:#333333;stroke:#ffffff;stroke-width:0;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none"
        d="m 88.446426,59.011532 h 11.859004 v 1.275669 H 88.446426 Z" />
     <path
        id="rect846"
        style="fill:#333333;stroke:#ffffff;stroke-width:0;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none"
        transform="rotate(42.165198)"
        d="m 105.1703,-19.316656 h 0.94494 v 4.630208 h -0.94494 z" />
     <path
        id="rect848"
        style="fill:#333333;stroke:#ffffff;stroke-width:0;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none"
        transform="rotate(42.165198)"
        d="m 105.1703,-15.631393 h 4.44123 v 0.944941 h -4.44123 z" />
     <path
        id="rect846-6"
        style="fill:#333333;stroke:#ffffff;stroke-width:0;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none"
        transform="matrix(-0.74121247,0.67127049,0.67127049,0.74121247,0,0)"
        d="m -34.734936,107.38689 h 0.944941 v 4.63021 h -0.944941 z" />
     <path
        id="rect848-4"
        style="fill:#333333;stroke:#ffffff;stroke-width:0;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none"
        transform="matrix(-0.74121247,0.67127049,0.67127049,0.74121247,0,0)"
        d="m -34.734936,111.07216 h 4.441224 v 0.94494 h -4.441224 z" />
   </g>
 </g>
</svg>

  `
  );

  editor.ui.registry.addMenuButton('font-weight', {
    tooltip: 'font weight',
    icon: 'font-weight',
    fetch: function(callback) {
      const defaultFontWeightFormats = 'unset 100 200 300 400 500 600 700 800 900';
      const userSettings = editor.settings.fontweight_formats;
      const fontweightFormats = typeof userSettings === 'string' ? userSettings : defaultFontWeightFormats;
  
      const items = fontweightFormats.split(' ').map(item => {
        let text = item,
          value = item;
        const values = item.split('=');
        if (values.length > 1) {
          [text, value] = values;
        }
    
        return {
          type: 'menuitem',
          text: text,
          onAction: function() {
            const span = document.createElement('span');
            span.innerHTML = editor.selection.getContent();
            const currentNode = <HTMLElement>editor.selection.getNode();
            if(span.innerHTML == currentNode.innerHTML){
              currentNode.style.fontWeight = value;
            }else{
              span.innerHTML = span.textContent || span.innerText;
              const returnVal = '<span style="font-weight:' + value + ' " >' + span.innerHTML + '</span>';
              editor.selection.setContent( returnVal ) ;
            }
            span.remove();
          
          }
        };
      });
  
      callback(items);
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('font-weight', setup);
};
