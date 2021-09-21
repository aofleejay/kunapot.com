import inquirer from 'inquirer'
import sharp from 'sharp'

enum ImageType { // eslint-disable-line no-unused-vars
  coverImage = 'cover image', // eslint-disable-line no-unused-vars
}

type Input = {
  imageType: ImageType
  inputFile: string
  outputFolder: string
}

const resize = ({ imageType, inputFile, outputFolder }: Input) => {
  const imageSize = [{ name: ImageType.coverImage, width: 1600, height: 900 }]
  const size = imageSize.find((size) => size.name === imageType)

  if (size) {
    sharp(inputFile)
      .resize(size.width, size.height)
      .jpeg()
      .toFile(`${outputFolder}/foo-cover-image.jpg`)
  }
}

inquirer
  .prompt([
    {
      type: 'list',
      name: 'imageType',
      message: 'Select image type ?',
      choices: [ImageType.coverImage],
    },
    {
      type: 'input',
      name: 'inputFile',
      message: 'Drag input file here ?',
      validate: (title) => !!title || 'Enter input file bro!!',
    },
    {
      type: 'input',
      name: 'outputFolder',
      message: 'Drag output folder here ?',
      validate: (title) => !!title || 'Enter output folder bro!!',
    },
  ])
  .then((answers) => resize(answers))
  .catch((error) => console.error(error))
