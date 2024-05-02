import { Link, useNavigate } from "react-router-dom";
import classes from './OnBoarding.module.css'

const OnBoarding: React.FC = () => {
  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate('/signup')
  }
  return (
    <>
    <main className={classes.container}>
      
      <h1>
        Connect with frends <strong>Easily & Quick</strong>
      </h1>
      <p>Our chat app is the perfect way to start messagging</p>
      <button onClick={handleClick}  className={classes.myButton}>Signup</button>

      <p>Existing account? <Link to="/login">Log in</Link></p>
      </main>
    </>
  );
};
export default OnBoarding;
