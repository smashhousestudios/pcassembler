'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NVidia_GPUs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      "Model": {
        type: Sequelize.STRING
      },
      "Brand": {
        type: Sequelize.STRING
      },
      "Cuda_Cores": {
        type: Sequelize.INTEGER
      },
      "Boost_Clock": {
        type: Sequelize.INTEGER
      },
      "Base_Clock": {
        type: Sequelize.INTEGER
      },
      "Memory_Specs": {
        type: Sequelize.INTEGER
      },
      "Memory": {
        type: Sequelize.STRING
      },
      "GDDR_Version": {
        type: Sequelize.STRING
      },
      "Memory_Interface_Bandwidth": {
        type: Sequelize.STRING
      },
      "Memory_Bandwidth": {
        type: Sequelize.STRING
      },
      "Real_Time_Ray_Tracing": {
        type: Sequelize.BOOLEAN
      },
      "Nvidia_DLSS_2_dot_0": {
        type: Sequelize.BOOLEAN
      },
      "Nvidia_GeForce_Experience": {
        type: Sequelize.BOOLEAN
      },
      "Nvidia_Ansel": {
        type: Sequelize.BOOLEAN
      },
      "Nvidia_Highlights": {
        type: Sequelize.BOOLEAN
      },
      "Nvidia_GSync": {
        type: Sequelize.BOOLEAN
      },
      "GameReady_Drivers": {
        type: Sequelize.BOOLEAN
      },
      "DirectX_12": {
        type: Sequelize.BOOLEAN
      },
      "Vulkan_API": {
        type: Sequelize.BOOLEAN
      },
      "OpenGL_4_dot_6": {
        type: Sequelize.BOOLEAN
      },
      "HDCP_2_dot_2": {
        type: Sequelize.BOOLEAN
      },
      "Nvidia_GPU_Boost": {
        type: Sequelize.BOOLEAN
      },
      "Nvidia_NVLink": {
        type: Sequelize.BOOLEAN
      },
      "VR_Ready": {
        type: Sequelize.BOOLEAN
      },
      "VirtualLink": {
        type: Sequelize.BOOLEAN
      },
      "Nvidia_Encoder": {
        type: Sequelize.BOOLEAN
      },
      "Maximum_Digital_Resolution": {
        type: Sequelize.STRING
      },
      "Display_Port": {
        type: Sequelize.BOOLEAN
      },
      "HDMI": {
        type: Sequelize.BOOLEAN
      },
      "TypeC": {
        type: Sequelize.BOOLEAN
      },
      "Multi_Monitor": {
        type: Sequelize.BOOLEAN
      },
      "HDCP": {
        type: Sequelize.BOOLEAN
      },
      "Height": {
        type: Sequelize.DOUBLE
      },
      "Length": {
        type: Sequelize.DOUBLE
      },
      "Width": {
        type: Sequelize.STRING
      },
      "Max_GPU_Temp": {
        type: Sequelize.INTEGER
      },
      "GPU_Power_Consumption": {
        type: Sequelize.INTEGER
      },
      "Power_Connectors": {
        type: Sequelize.INTEGER
      },
      "Tags":{
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      "createdAt": {
        type: Sequelize.DATE
      },
      "updatedAt": {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('NVidia_GPUs');
  }
};