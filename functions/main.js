export function getDominantColor(imageUrl) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = imageUrl;
      img.onload = function () {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = this.width;
        canvas.height = this.height;
        context.drawImage(this, 0, 0);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
        const colorCounts = {};
        let maxCount = 0;
        let dominantColor = [0, 0, 0];
        for (let i = 0; i < imageData.length; i += 4) {
          const color = imageData.slice(i, i + 3).join(',');
          if (color in colorCounts) {
            colorCounts[color]++;
          } else {
            colorCounts[color] = 1;
          }
          if (colorCounts[color] > maxCount) {
            maxCount = colorCounts[color];
            dominantColor = imageData.slice(i, i + 3);
          }
        }
        resolve(`rgb(${dominantColor.join(',')})`);
      };
      img.onerror = function () {
        reject(new Error('Failed to load image'));
      };
    });
  }