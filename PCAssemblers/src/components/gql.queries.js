import gql from "graphql-tag";

export const ALL_PROCESSORS = gql`
query fetchAllProcessors{
  processors{
    id
    brand
    model
  }
  catagories{
    id
    filter
  }

  nvidia_gpus{
    id
    Model
    Brand
    Cuda_Cores
    Boost_Clock
    Base_Clock
    Memory_Specs
    Memory
    GDDR_Version
    Memory_Interface_Bandwidth
    Memory_Bandwidth
    Real_Time_Ray_Tracing
    Nvidia_DLSS_2_dot_0
    Nvidia_GeForce_Experience
    Nvidia_Ansel
    Nvidia_Highlights
    Nvidia_GSync
    GameReady_Drivers
    DirectX_12
    Vulkan_API
    OpenGL_4_dot_6
    HDCP_2_dot_2
    Nvidia_GPU_boost
    Nvidia_NVLink
    VR_Ready
    VirtualLink
    Nvidia_Encoder
    Maximum_Digital_Resolution
    Display_Port
    HDMI
    TypeC
    Multi_Monitor
    HDCP
    Height
    Length
    Width
    Max_GPU_Temp
    GPU_Power_Consumption
    Power_Connectors
    Tags
  }
}
`;