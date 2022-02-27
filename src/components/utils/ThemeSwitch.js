import {Switch} from "antd";
import './themeSwitch.scss'
import {useEffect} from "react";

function ThemeSwitch() {
  useEffect(() => {
    document.documentElement.setAttribute("theme", "light");
  })

  const onChange = (check) => {
    if (check) {
      document.documentElement.setAttribute("theme", "dark");
    } else {
      document.documentElement.setAttribute("theme", "light");
    }
  }

  return <Switch
    checkedChildren={'🌜'}
    unCheckedChildren={'🌞'}
    onChange={onChange}
  />
}

export default ThemeSwitch;
