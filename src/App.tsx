import * as icons from "../lib";
import { useState } from "react";

interface IconObject {
  [key: string]: icons.Icon;
}

function App() {
  const [filter, setFilter] = useState("");
  const matcher = new RegExp(filter, "i");
  return (
    <div className="container">
      <h1>MapIcons React</h1>
      <div className="mb-4">
        <label htmlFor="filter">Filter</label>
        <input
          type="text"
          className="form-control"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap">
        {Object.keys(icons)
          .filter((icon) => {
            return matcher.test(icon);
          })
          .map((icon: keyof IconObject) => {
            const Icon: icons.Icon = icons[icon as keyof typeof icons];
            return (
              <div className="d-inline" title={icon.toString()}>
                <Icon className="mb-3 ml-3" size="medium" key={icon} />
              </div>
            );
          })}
      </div>
      {/* {Object.keys(icons).map((icon: keyof IconObject) => {
        const Icon: icons.Icon = icons[icon as keyof typeof icons];
        return (
          <div key={icon}>
            <h6
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {icon}
              <Icon size="medium" />
            </h6>
            <button type="button" className="mr-3 btn btn-primary">
              <Icon />
            </button>
            <button type="button" className="mr-3 btn btn-secondary">
              <Icon />
            </button>
            <button type="button" className="mr-3 btn btn-success">
              <Icon />
            </button>
            <button type="button" className="mr-3 btn btn-info">
              <Icon />
            </button>
            <button type="button" className="mr-3 btn btn-warning">
              <Icon />
            </button>
            <button type="button" className="mr-3 btn btn-danger">
              <Icon />
            </button>
            <button type="button" className="mr-3 btn btn-light">
              <Icon />
            </button>
            <button type="button" className="mr-3 btn btn-dark">
              <Icon />
            </button>
            <button type="button" className="mr-3 btn btn-link">
              <Icon />
            </button>
            <pre>{`import { ${icon} } from "@corpsmap/map-icons-react"`}</pre>
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
