import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={`py-2 py-md-4 mb-3 ${style.header}`}>
      <div className={style.container}>
        <h2> Coal managment System</h2>
      </div>
    </header>
  );
};

export default Header;
