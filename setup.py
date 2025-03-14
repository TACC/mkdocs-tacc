from setuptools import setup, find_packages

VERSION = '0.1.0'

setup(
    name="mkdocs-tacc-readthedocs",
    version=VERSION,
    url='https://github.com/TACC/Core-Docs',
    license='MIT',
    description='TACC ReadTheDocs theme for MkDocs',
    author='TACC',
    author_email='info@tacc.utexas.edu',
    packages=find_packages(),
    include_package_data=True,
    entry_points={
        'mkdocs.themes': [
            'tacc-readthedocs = tacc_readthedocs',
        ]
    },
    zip_safe=False
)
