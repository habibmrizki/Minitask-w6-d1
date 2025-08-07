import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../redux/slices/surveyResult";

const SurveyForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [nama, setNama] = useState("");
  const [usia, setUsia] = useState("");
  const [riwayatMerokok, setRiwayatMerokok] = useState("tidak");
  const [selectedRokok, setSelectedRokok] = useState([]);

  const rokokOptions = [
    { value: "gudang-garam", label: "Gudang Garam" },
    { value: "essei", label: "Essei" },
    { value: "malboro", label: "Malboro" },
    { value: "camel", label: "Camel" },
  ];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSelectedRokok((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((rokok) => rokok !== value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nama.trim() === "" || usia.trim() === "") {
      alert("Nama dan usia tidak boleh kosong!");
      return;
    }

    dispatch(
      addData({
        nama,
        usia: parseInt(usia, 10),
        riwayatMerokok: riwayatMerokok === "ya",
        jenisRokok: selectedRokok,
      })
    );

    setNama("");
    setUsia("");
    setRiwayatMerokok("tidak");
    setSelectedRokok([]);
    onClose();
  };

  return (
    <div className="py-2">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Formulir Survei Perokok
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="nama"
            className="block text-sm font-medium text-gray-700"
          >
            Nama
          </label>
          <input
            type="text"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="usia"
            className="block text-sm font-medium text-gray-700"
          >
            Usia
          </label>
          <input
            type="number"
            id="usia"
            value={usia}
            onChange={(e) => setUsia(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Riwayat Merokok
          </label>
          <div className="mt-1 flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="merokok"
                value="ya"
                checked={riwayatMerokok === "ya"}
                onChange={(e) => setRiwayatMerokok(e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">Ya</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="merokok"
                value="tidak"
                checked={riwayatMerokok === "tidak"}
                onChange={(e) => setRiwayatMerokok(e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">Tidak</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col ">
          <h2>Jenis Rokok Yand Digunakan</h2>
          <div className="flex justify-start">
            {rokokOptions.map((option) => (
              <div key={option.value}>
                <input
                  type="checkbox"
                  id={option.value}
                  name="jenis_rokok"
                  value={option.value}
                  checked={selectedRokok.includes(option.value)}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={option.value} className="ml-2">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
        >
          Simpan Data
        </button>
      </form>
    </div>
  );
};

export default SurveyForm;
