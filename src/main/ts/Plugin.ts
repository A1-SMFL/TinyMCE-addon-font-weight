import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('font-weight', {
    text: 'font-weight button',
    onAction: () => {
      editor.setContent('<p>content added from font-weight</p>');
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('font-weight', setup);
};
