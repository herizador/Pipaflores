#!/bin/bash
# Script de build para Render

echo "🚀 Iniciando build de Pipaflores..."

# Verificar que estamos en el directorio correcto
echo "📁 Directorio actual: $(pwd)"
echo "📄 Archivos en el directorio:"
ls -la

# Verificar que package.json existe
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json no encontrado en el directorio raíz"
    exit 1
fi

echo "✅ package.json encontrado"

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Verificar que node_modules se creó
if [ ! -d "node_modules" ]; then
    echo "❌ Error: node_modules no se creó"
    exit 1
fi

echo "✅ Dependencias instaladas"

# Ejecutar build
echo "🔨 Ejecutando build..."
npm run build

# Verificar que dist se creó
if [ ! -d "dist" ]; then
    echo "❌ Error: carpeta dist no se creó"
    exit 1
fi

echo "✅ Build completado exitosamente"
echo "📁 Contenido de dist:"
ls -la dist/
