import React from "react";
import First from "./components/basics/first";
import WithParameter from "./components/basics/withParameter";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/RandomNumber";
import Card from "./components/layout/Card";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import StudentList from "./components/repetition/StudentList";
import ProductsTable from "./components/repetition/ProductsTable";
import "./App.css";

export default (p) => (
  <div className="app">
    <h1>Fundamentos do React</h1>

    <div className="Cards">
      <Card title="#07 - Repetition Challenge" color="#51074a">
        <ProductsTable />
      </Card>
      <Card title="#06 - Repetition" color="#ffb6c1">
        <StudentList />
      </Card>
      <Card title="#05 - Family Member" color="#1d4ed8">
        <Family familyName="Ferreira">
          <FamilyMember name="Pedro" lastName="Lima" />
          <FamilyMember name="João" lastName="Gomes" />
          <FamilyMember name="Tiago" lastName="Silva" />
        </Family>
      </Card>
      <Card title="#04 - Card Example" color="#080">
        <Random min={10} max={60} />
      </Card>
      <Card title="#03 - Fragment" color="#f472b6">
        <Fragment />
      </Card>
      <Card title="#02 - With Parameter" color="#8b5cf6">
        <WithParameter title="Student Situation" student="Pedro" score={9.3} />
      </Card>
      <Card title="#01 - First Component" color="#b91c1c">
        <First></First>
      </Card>
    </div>
  </div>
);
