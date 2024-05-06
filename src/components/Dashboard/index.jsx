import { memo, useEffect, useState } from "react";

import "./style.css";
import { Switch } from "antd";
import {
  LogoutOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  AppstoreTwoTone,
  DeleteTwoTone,
  EditTwoTone,
  EyeTwoTone,
  EyeInvisibleTwoTone,
} from "@ant-design/icons";
import dashboardApi from "../../apis/dashboard";
import Update from "./update";
import DynamicModal from "../../common/DynamicModal";
const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(10);
  const [totalStoreValue, setTotalStoreValue] = useState(100);
  const [isUser, setIsUser] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [editModalData, setEditModalData] = useState();
  const [editIndex, setEditIndex] = useState();
  const [disabledProduct, setDisabledProduct] = useState([]);
  const [inventoryData, setInventoryData] = useState([
    {
      name: "Bluetooth",
      category: "Electronic",
      value: "150",
      quantity: 5,
      price: "30",
    },
    {
      name: "Edifier M43560",
      category: "Electronic",
      value: "0",
      quantity: 0,
      price: "0",
    },
    {
      name: "Sony 4k ultra 55 inch TV",
      category: "Electronic",
      value: "1190",
      quantity: 17,
      price: "70",
    },
    {
      name: "Samsumg 55 inch TV",
      category: "Electronic",
      value: "600",
      quantity: 50,
      price: "12",
    },
    {
      name: "samsumg S34 Ultra",
      category: "phone",
      value: "0",
      quantity: 0,
      price: "0",
    },
  ]);
  const totalInventoryData = [
    {
      key: 1,
      title: "Total Product",
      icon: <ShoppingCartOutlined style={{ color: "white" }} />,
      count: totalProducts,
    },
    {
      key: 2,
      title: "Total Store Value",
      icon: <DollarOutlined style={{ color: "white" }} />,
      count: totalStoreValue,
    },
    {
      key: 3,
      title: "Out Of Stocks ",
      icon: <DeleteTwoTone style={{ color: "white" }} />,
      count: disabledProduct.length,
    },
    {
      key: 4,
      title: "No Of Category",
      icon: <AppstoreTwoTone style={{ color: "white" }} />,
      count: inventoryData.length,
    },
  ];
  useEffect(() => {
    try {
      const data = dashboardApi.getAllInventoryData();
      data.then((res) => {
        console.log(res);
        if (res.status == 200) {
          setInventoryData(res.data);
        }
      });
    } catch (err) {
      console.log(err);
    }

    getTotalQuantity();
  }, [inventoryData]);

  const getTotalQuantity = () => {
    var data = [...inventoryData];
    let totalProduct = 0;
    let totalStoreValue = 0;
    for (const item of data) {
      totalProduct += item.quantity;
      totalStoreValue += Number(item.value);
    }
    setTotalStoreValue(totalStoreValue);
    setTotalProducts(totalProduct);
  };

  const handleUser = () => {
    setIsUser(!isUser);
  };
  const handleDelete = (index) => {
    const newData = inventoryData.filter((item, i) => i !== index);
    console.log(newData);
    setInventoryData(newData);
    setDisabledProduct([]);
  };
  const handleEdit = (index, data) => {
    setOpenModal(true);
    setEditIndex(index);
    setEditModalData(data);
    console.log(data);
  };
  const cancelBtn = () => {
    setOpenModal(false);
  };
  const setCategory = (e) => {
    let data = { ...editModalData };
    data.category = e.target.value;
    setEditModalData(data);
  };
  const setQuanity = (e) => {
    let data = { ...editModalData };
    data.quantity = e.target.value;
    setEditModalData(data);
  };
  const setPrice = (e) => {
    let data = { ...editModalData };
    data.price = e.target.value;
    setEditModalData(data);
  };
  const setValue = (e) => {
    let data = { ...editModalData };
    data.value = e.target.value;
    setEditModalData(data);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = [...inventoryData];
    data[editIndex] = editModalData;
    setInventoryData(data);
    setOpenModal(false);
  };
  const updateModal = () => {
    return (
      <DynamicModal
        open={openModal}
        closable={true}
        close={() => setOpenModal(false)}
        footer={null}
        width={600}
        height={`100%`}
        // height={600}
        component={
          <Update
            close={() => setOpenModal(false)}
            data={editModalData}
            index={editIndex}
            cancelBtn={cancelBtn}
            setCategory={setCategory}
            setPrice={setPrice}
            setValue={setValue}
            setQuantity={setQuanity}
            handleSubmit={handleFormSubmit}
          />
        }
      />
    );
  };
  const handleDisable = (index) => {
    let data = [...disabledProduct];
    console.log(index);
    data.push(index);
    setDisabledProduct(data);
    console.log(data);
  };
  const handleEnable = (index) => {
    console.log(index);
    let data = [...disabledProduct];
    data = data.filter((x) => x !== index); // Filter out the element with the specified index
    setDisabledProduct(data);
    console.log(data);
  };

  const getNavBar = () => {
    return (
      <div className="nav-section">
        <div className="content">
          <label>Admin</label>
          <Switch checked={isUser ? true : false} onChange={handleUser} />
          <label>User</label>
          <LogoutOutlined style={{ color: "white" }} />
        </div>
      </div>
    );
  };

  const getTotalInventoryData = () => {
    return (
      <div className="inventory-main-container">
        <div className="content">
            <div className="heading">
             <h1>   Inventory Stats</h1>
            </div>
            <div className="data-number">
          {totalInventoryData.length > 0 &&
            totalInventoryData.map((data) => {
              return (
                <div className="card">
                  <div className="card-content">
                    <div className="icon">{data.icon}</div>
                    <div className="stats">
                      <div className="heading">{data.title}</div>
                      <div className="numbers">{data.count}</div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
        </div>
      </div>
    );
  };
  const getTableData = () => {
    return (
      <div className="table-main_container">
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>
                  <div>Name</div>
                </th>
                <th>
                  <div>Categiory</div>
                </th>
                <th>
                  <div>Price</div>
                </th>
                <th>
                  <div>Quantity</div>
                </th>
                <th>
                  <div>Value</div>
                </th>
                <th>
                  <div>Actions</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.length > 0 &&
                inventoryData.map((data, index) => {
                  return (
                    <tr className={disabledProduct.includes(index)? 'disabled-row':""}>
                      <td>{data.name}</td>
                      <td>{data.category}</td>
                      <td>${data.price}</td>
                      <td>{data.quantity}</td>
                      <td>${data.value}</td>
                      <td>
                        <EditTwoTone
                          twoToneColor={isUser ? 'grey':"#52c41a"}
                          onClick={() => {
                            if (!isUser) {
                              handleEdit(index, data);
                            }
                          }}
                          disabled={isUser}
                        />{" "}
                        {disabledProduct.includes(index) ? (
                          <EyeInvisibleTwoTone
                            twoToneColor={isUser ? 'grey':"#722ed1"}
                            onClick={() => {
                              if (!isUser) {
                                handleEnable(index);
                              }
                            }}
                          />
                        ) : (
                          <EyeTwoTone
                            twoToneColor={isUser ? 'grey': "#722ed1"}
                            onClick={() => {
                              if (!isUser) {
                                handleDisable(index);
                              }
                            }}
                          />
                        )}{" "}
                        <DeleteTwoTone
                          twoToneColor={isUser ? 'grey' :"#ff4d4f"}
                          disabled={isUser}
                          onClick={() => {
                            if (!isUser) {
                              handleDelete(index);
                            }
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard_main">
      {getNavBar()}
      {getTotalInventoryData()}
      {getTableData()}
      {openModal && updateModal()}
    </div>
  );
};
export default memo(Dashboard);
