import fs from 'fs'
function your_function_from_another_module(testDataFile) {
  const dataArray = testDataFile.toString().split('\n')
  let result = ''
  dataArray.forEach(data => {
    const mileAndTime = data.split(',')
    const mile = getNumberInStr(mileAndTime[0])
    const time = getNumberInStr(mileAndTime[1])
    result += `收费${calculatePrice(mile, time).toFixed(0)}元\n`
  });
  // TODO: rename and start coding, pls move your function out of this file
  return result;
}
function calculatePrice(mile, time) {
  let price = 6
  if (mile > 2) {
    price += (mile - 2) * 0.8
  }
  if (mile > 8) {
    price += (mile - 8) * 0.5
  }
  price += time * 0.25
  return price
}
function getNumberInStr(str) {
  return str.replace(/[^0-9]/ig, "")
}
export default function main(testDataFile = 'testData.txt') {
  /* TODO
    1. testDataFile为fixtures文件夹下的测试数据文件名，例如传入的值为"testData.txt"，注意并不包含文件路径。
    2. 你写的程序将把testDataFile作为参数加载此文件并读取文件内的测试数据，并对每条测试数据计算结果。
    3. 将所有计费结果拼接并使用\n分割，然后保存到receipt变量中。
   */  
  const path = `./src/fixtures/${testDataFile}`
  const receipt = your_function_from_another_module(fs.readFileSync(path));
  return receipt;
}