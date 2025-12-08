export const convertShipmentDate = (applicationDate) => {
  const todayMonthAndDay = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' }).replace(/\//g, "-");
  const shipmentMonthAndDay = applicationDate.slice(5);
  return shipmentMonthAndDay;
}