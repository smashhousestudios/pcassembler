'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NVidia_GPU extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NVidia_GPU.init({
    "Model": DataTypes.STRING,
    "Brand": DataTypes.STRING,
    "Cuda_Cores": DataTypes.INTEGER,
    "Boost_Clock": DataTypes.INTEGER,
    "Base_Clock": DataTypes.INTEGER,
    "Memory_Specs": DataTypes.INTEGER,
    "Memory": DataTypes.STRING,
    "GDDR_Version": DataTypes.STRING,
    "Memory_Interface_Bandwidth": DataTypes.STRING,
    "Memory_Bandwidth": DataTypes.STRING,
    "Real_Time_Ray_Tracing": DataTypes.BOOLEAN,
    "Nvidia_DLSS_2_dot_0": DataTypes.BOOLEAN,
    "Nvidia_GeForce_Experience": DataTypes.BOOLEAN,
    "Nvidia_Ansel": DataTypes.BOOLEAN,
    "Nvidia_Highlights": DataTypes.BOOLEAN,
    "Nvidia_GSync": DataTypes.BOOLEAN,
    "GameReady_Drivers": DataTypes.BOOLEAN,
    "DirectX_12": DataTypes.BOOLEAN,
    "Vulkan_API": DataTypes.BOOLEAN,
    "OpenGL_4_dot_6": DataTypes.BOOLEAN,
    "HDCP_2_dot_2": DataTypes.BOOLEAN,
    "Nvidia_GPU_Boost": DataTypes.BOOLEAN,
    "Nvidia_NVLink": DataTypes.BOOLEAN,
    "VR_Ready": DataTypes.BOOLEAN,
    "VirtualLink": DataTypes.BOOLEAN,
    "Nvidia_Encoder": DataTypes.BOOLEAN,
    "Maximum_Digital_Resolution": DataTypes.STRING,
    "Display_Port": DataTypes.BOOLEAN,
    "HDMI": DataTypes.BOOLEAN,
    "TypeC": DataTypes.BOOLEAN,
    "Multi_Monitor": DataTypes.BOOLEAN,
    "HDCP": DataTypes.BOOLEAN,
    "Height": DataTypes.DOUBLE,
    "Length": DataTypes.DOUBLE,
    "Width": DataTypes.STRING,
    "Max_GPU_Temp": DataTypes.INTEGER,
    "GPU_Power_Consumption": DataTypes.INTEGER,
    "Power_Connectors": DataTypes.INTEGER,
    "Tags": DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'NVidia_GPU',
  });
  return NVidia_GPU;
};