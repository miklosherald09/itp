const toNumber = (num: number | null | undefined): string | null => {
  if (!num) return null;

  const formatter = new Intl.NumberFormat("en-US");
  const formattedNumber = formatter.format(num ?? 0);
  return formattedNumber;
};

const formatter = { toNumber };

export default formatter;
