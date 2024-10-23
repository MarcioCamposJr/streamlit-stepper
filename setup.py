from setuptools import setup, find_packages
import os

# Leitura do README.md para a descrição do pacote
with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="streamlit-component-stepper",  # Nome do pacote no PyPI
    version="0.1.0",  # Versão inicial
    author="Marcio Campos",
    author_email="marcio.campos6@gmail.com",
    description="Um componente Stepper personalizado para Streamlit",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/seuusuario/my-streamlit-component",  # URL do repositório
    packages=find_packages(),
    include_package_data=True,  # Inclui arquivos especificados no MANIFEST.in
    install_requires=[
        "streamlit>=1.0",
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",  # Altere conforme sua licença
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)
