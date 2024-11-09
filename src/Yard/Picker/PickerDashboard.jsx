import React from "react";
import AporaCommonNavbar from "../AporaCommonNavbar";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function PickerDashboard() {
  const navigate=useNavigate()
  const handleAddcarton=()=>{
    navigate('/addcarton')
  }
  return (
    <div >
      <AporaCommonNavbar />
      <div className="common-borderleft">
      <div className="picker-dashboard-maindiv">
        {/* Card 1 */}
        <div className="card" style={{ width: "14rem" }}>
          <div className="card-body" onClick={handleAddcarton}>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="5em"
              width="5em"
            >
              <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
            </svg>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card" style={{ width: "14rem" }}>
          <div className="card-body">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="5em"
              width="5em"
            >
              <path
                fillRule="evenodd"
                d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3.854 2.146a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708L2 3.293l1.146-1.147a.5.5 0 01.708 0zm0 4a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708L2 7.293l1.146-1.147a.5.5 0 01.708 0zm0 4a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 01.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0z"
              />
            </svg>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card" style={{ width: "14rem" }}>
          <div className="card-body">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="5em"
              width="5em"
            >
              <path d="M8.186 1.113a.5.5 0 00-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 011.114 0l7.129 2.852A.5.5 0 0116 3.5v8.662a1 1 0 01-.629.928l-7.185 2.874a.5.5 0 01-.372 0L.63 13.09a1 1 0 01-.63-.928V3.5a.5.5 0 01.314-.464L7.443.184z" />
            </svg>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card" style={{ width: "14rem" }}>
          <div className="card-body">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="5em"
              width="5em"
            >
              <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z" />
            </svg>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default PickerDashboard;
