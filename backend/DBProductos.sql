-- Crear la base de datos
CREATE DATABASE [DBProductos]

GO
USE [DBProductos]
GO

-- Crear la tabla Productos
CREATE TABLE [dbo].[Productos](
    [ProductoID] [int] IDENTITY(1,1) NOT NULL,
    [Nombre] [varchar](50) NOT NULL,
    [Precio] [decimal](8, 2) NOT NULL,
    [FechaCreacion] [datetime] NULL,
    CONSTRAINT [PK_Productos] PRIMARY KEY CLUSTERED ([ProductoID] ASC)
)
GO

-- Agregar valor por defecto para FechaCreacion
ALTER TABLE [dbo].[Productos] 
ADD CONSTRAINT [Const_FechaCreacion] DEFAULT (getdate()) FOR [FechaCreacion]
GO

-- Insertar datos de ejemplo
INSERT [dbo].[Productos] ([Nombre], [Precio]) VALUES 
    ('Mentas', 10.00),
    ('Mango', 25.00)
GO

SELECT * FROM Productos;