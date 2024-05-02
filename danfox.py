function isin(series, values)
{
  let result = series.eq(values[0]);
  for (i = 1; i < values.length; i++)
  {
    result = result.or(series.eq(values[i]));
  }
  return result;
}

function select(df, columns, values)
{
  let result = df;
  for (i = 0; i < columns.length; i++)
  {
    result = result.query(result[columns[i]].eq(values[i])).resetIndex();
  }
  return result;
}

function segment(df, columns)
{
  let result = [];
  keyToValue = df.groupby(columns).keyToValue;
  for (let key in keyToValue)
  {
    result.push(select(df, columns, keyToValue[key]));
  }
  return result;
}
