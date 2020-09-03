const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        id: Int!
        login: String!
    }

    type Processors {
        id: ID!
        brand: String!
        model: String!
        chipset: String!
        price: Float!
        clockrate: Float!
    }

    type Catagories{
        id: ID!
        filter: String!
    }

    type NVidia_GPU{
        id: ID!
        Model: String
        Brand: String
        Cuda_Cores: Int
        Boost_Clock: Int
        Base_Clock: Int
        Memory_Specs: Int
        Memory: String
        GDDR_Version: String
        Memory_Interface_Bandwidth: String
        Memory_Bandwidth: String
        Real_Time_Ray_Tracing: Boolean
        Nvidia_DLSS_2_dot_0: Boolean
        Nvidia_GeForce_Experience: Boolean
        Nvidia_Ansel: Boolean
        Nvidia_Highlights: Boolean
        Nvidia_GSync: Boolean
        GameReady_Drivers: Boolean
        DirectX_12: Boolean
        Vulkan_API: Boolean
        OpenGL_4_dot_6: Boolean
        HDCP_2_dot_2: Boolean
        Nvidia_GPU_boost: Boolean
        Nvidia_NVLink: Boolean
        VR_Ready: Boolean
        VirtualLink: Boolean
        Nvidia_Encoder: Boolean
        Maximum_Digital_Resolution: String
        Display_Port: Boolean
        HDMI: Boolean
        TypeC: Boolean
        Multi_Monitor: Boolean
        HDCP: Boolean
        Height: Float
        Length: Float
        Width: String
        Max_GPU_Temp: Int
        GPU_Power_Consumption: Int
        Power_Connectors: Int
        Tags: [String]
    }

    type Query {
        current: User

        processor(id: ID!): Processors
        processors: [Processors]
        
        catagory(id: ID!): Catagories
        catagories: [Catagories]

        nvidia_gpu(id: ID!): NVidia_GPU
        nvidia_gpus: [NVidia_GPU]
    }

    type Mutation {
        register(login: String!, password: String!): String
        login(login: String!, password: String!): String
    }
`;

module.exports = typeDefs;