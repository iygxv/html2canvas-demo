import html2canvas from 'html2canvas';
export async function downloadImage(id, options = {}, downloadName = 'image.png') {
  const element = document.getElementById(id);
  // 默认配置
  const {
    useCORS = true,
    scale =  window.devicePixelRatio * 2
  } = options
  const canvas = await html2canvas(element, {
      useCORS,
      scale
  });
  const dataUrl = canvas.toDataURL();
  downloadFile(downloadName, dataUrl)
}

function downloadFile(name, code) {
  const aLink = document.createElement('a');
  aLink.download = name;
  aLink.href = code;
  aLink.click();
}