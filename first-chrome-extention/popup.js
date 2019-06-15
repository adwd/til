// @ts-check

const changeColor = document.getElementById('changeColor');

if (changeColor) {
  chrome.storage.sync.get('color', (data) => {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });

  changeColor.onclick = (element) => {
    if (element.target && element.target instanceof HTMLButtonElement) {
      const color = element.target.value;
      chrome.tabs.query({ active: true, currentWindow: true} , (tabs) => {
        if (tabs[0] && tabs[0].id) {
          chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.backgroundColor = "' + color + '";'}
          );
        }
      });
    }
  };  
}
