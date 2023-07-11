export const downloadImage = async (imageUrl: string) => {


    const urlArray = imageUrl.split("/")
    const imageName = urlArray[urlArray.length - 1]
    const image = await fetch(imageUrl)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
    
    const link = document.createElement('a')
    link.href = imageURL
    link.download = imageName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
      }