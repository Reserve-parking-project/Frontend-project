import iconParking from "../../assets/image/IconDecor/Parking.svg";

const ParkingDecor = ({ urlCar, ...props }) => {
  return (
    <div {...props}>
      <img src={urlCar} alt="Car icon" />
      <img src={iconParking} alt="Parking sign icon" />
    </div>
  );
};
export default ParkingDecor;
