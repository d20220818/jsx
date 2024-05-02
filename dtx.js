function minDate(list)
{
  let result = list[0]
  for(i=1; i < list.length; i++)
  {
    if (list[i] < result)
    {
      result = list[i]
    }
  }
  return result
}

function maxDate(list)
{
  let result = list[0]
  for(i=1; i < list.length; i++)
  {
    if (list[i] > result)
    {
      result = list[i]
    }
  }
  return result
}

function toDate(dateString, sep='/')
{
  const parts = dateString.split(sep);
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Months are 0-based in JavaScript (0-January, 1-February, etc.)
  const year = parseInt(parts[2], 10);
  return new Date(year, month, day);
}

function dateRange(start, end)
{
  let result = [];
  let cur = start;
  while (cur <= end)
  {
    result.push(new Date(cur));
    cur.setDate(cur.getDate() + 1);
  }
  return result;
}

function formatDate(date, sep='/')
{
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}${sep}${month}${sep}${year}`;
}
