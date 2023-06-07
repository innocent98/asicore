import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import axios from "axios";

const Admin5= () => {
  const [withdraw, setWithdraw] = useState([]);
  const [isPaid, setIsPaid] = useState(false)

  const fetchWithdraw = async () => {
    try {
      const res = await axios.get(
        "https://api.asicore.xyz/api/user/withdraw/all"
      );
      setWithdraw(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    let unsubscribe = fetchWithdraw();
    return () => unsubscribe;
  }, [isPaid]);

  const reversed = [...withdraw].reverse();

  //   handle mark paid
  const handleMarkPaid = async (id) => {
    try {
      await axios.put(`https://api.asicore.xyz/api/user/mark-paid/${id}`);
      setIsPaid(!isPaid)
    } catch (error) {}
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "twitter",
      headerName: "Twitter",
      width: 110,
    },
    {
      field: "telegram",
      headerName: "Telegram",
      width: 110,
    },
    {
      field: "link",
      headerName: "Retweet link",
      width: 200,
    },
    {
      field: "referred",
      headerName: "Reward",
      width: 110,
    },
    {
      field: "balance",
      headerName: "Balance",
      width: 110,
    },
    {
      field: "address",
      headerName: "Wallet Address",
      width: 300,
    },
    {
      field: "isPaid",
      headerName: "Paid",
      width: 120,
      renderCell: (params) => {
        return (
          <button
            style={{ padding: "10px" }}
            onClick={() => handleMarkPaid(params.row.id)}
          >
            {params.row.isPaid ? "Paid" : "Mark paid"}
          </button>
        );
      },
    },
  ];

  const rows = reversed.slice(5104, 6354).map((item) => ({
    id: item._id,
    twitter: item.twitter,
    telegram: item.telegram,
    link: item.link,
    referred: item.referred,
    balance: item.balance,
    address: item.address,
    isPaid: item.isPaid,
  }));

  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 50,
            },
          },
        }}
        pageSizeOptions={[50]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Admin5;
