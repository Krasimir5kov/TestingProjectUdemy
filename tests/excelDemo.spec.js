const ExcelJs = require('exceljs');
const { test, expect } = require('@playwright/test');
 const { config } = require('node:process');

async function writeExcelTest(searchText, replaceText, change, savePath) {
  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(savePath);
  const worksheet = workbook.getWorksheet('Sheet1');
  const output = readExcel(worksheet, searchText); // not async
 
  const cell = worksheet.getCell(output.row, output.column + change.colChange);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(savePath);
}
 
// This does no async work, so don't mark it async.
function readExcel(worksheet, searchText) {
  let output = { row: -1, column: -1 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output = { row: rowNumber, column: colNumber };
      }
    });
  });
  return output;
}
 
//update Mango Price to 350. 
//writeExcelTest("Mango",350,{rowChange:0,colChange:2},"/Users/rahulshetty/downloads/excelTest.xlsx");
 
test('Upload download excel validation', async ({ page }) => {
  const textSearch = 'Mango';
  const updateValue = '400';
 
  await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
 
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Download' }).click()
  ]);
  const tempPath = await download.path();
  console.log('Temporary download path:', tempPath);
  const fileName = await download.suggestedFilename();
  const savePath = test.info().outputPath(fileName);
  await download.saveAs(savePath);
  console.log('File saved to:', savePath);
  const filePath = savePath // or await dl.path()

 
  // ✅ Ensure the edit finishes before upload
  await writeExcelTest(textSearch, updateValue, { rowChange: 0, colChange: 2 }, savePath);
 
  await page.locator('#fileinput').setInputFiles(savePath);
 
  const desiredRow = await page.getByRole('row').filter({ has: page.getByText(textSearch) });
  await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updateValue);
});
test('Upload download excel validation2', async ({ page }) => {
  const textSearch = 'Mango';
  const updateValue = '350';
 
  await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
 
  const download = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download' }).click();
    const dl = await download;

  await page.pause();
});
let day = '23'
let newTextCon = day + ' day days days' ;
let count = 0 ;
let val = newTextCon.indexOf('day',5);
while (val!== -1){
  count++;
  val = newTextCon.indexOf('day',val+1);
}
console.log(count);