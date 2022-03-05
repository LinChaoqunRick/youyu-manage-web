import {Switch} from "antd";
import './themeSwitch.scss'
import {useEffect, useState} from "react";

function ThemeSwitch() {
  let [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(123123);
    let theme = localStorage.getItem("theme") || 'light';
    theme === "dark" ? setChecked(true) : setChecked(false);
    document.documentElement.setAttribute("theme", theme);
  }, [])

  const onChange = (check) => {
    if (check) {
      document.documentElement.setAttribute("theme", "dark");
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      document.documentElement.setAttribute("theme", "light");
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  }

  return <Switch
    checked={checked}
    checkedChildren={'🌜'}
    unCheckedChildren={'🌞'}
    onChange={onChange}
  />
}

export default ThemeSwitch;
