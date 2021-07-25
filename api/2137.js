module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.json(difference());
};

const difference = () => {
  const jp2Death = new Date(2005, 3, 2)
  const now = new Date()
  const fullDayDifference = Math.floor((now - jp2Death) / 86400000)
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const yearDifference = now.getFullYear() - 2005;
  const monthDifference = now.getMonth() - jp2Death.getMonth();
  if (monthDifference < 0) {
      yearDifference--;
      monthDifference += 12;
  }
  const dayDifference = now.getDate() - jp2Death.getDate();
  if (dayDifference < 0) {
      if (monthDifference > 0) {
          monthDifference--;
      } else {
          yearDifference--;
          monthDifference = 11;
      }
      dayDifference += daysInMonth[jp2Death.getMonth()];
  }
  const response = {
    description: "Liczba dni od śmierci papieża",
    difference: {
      years: yearDifference,
      months: monthDifference,
      days: dayDifference
    },
    fullDayDifference
  }
  return response
}