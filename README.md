# Deno Jupyter Autoreload

## Overview

Implementation of (quasi) equivalent of [Python Jupyter Autoreload](https://ipython.org/ipython-doc/3/config/extensions/autoreload.html) in Deno kernel.  

Inspired by [deno issue 6946](https://github.com/denoland/deno/issues/6946#issuecomment-670986090).  

Because Typescript need be compiled before run, it it probably not possible (?) to achieve the exact same feature.  
However by separating class method from class properties, it is possible to update class methods while keeping class instatnce data.  
This greatly improves notebook workflows where a user wants to experiment with methods in a given state, which can be long or difficult to reach (e.g. long load time, long computations, etc).  

Also the dual use of VS Code and Jupyter enables to get the best of each one:

+ IDE with lots of help from deno vs_code extension
+ Jupyter notebook as "tip of the iceberg" or "cockpit" to instantiate a class and iterate on / run methods step by step.  

## Run

Assuming jupyter and deno are installed.  
If not check out:

+ [Install jupyterlab](https://jupyter.org/install) in a python environment.  
+ [Install deno](https://docs.deno.com/runtime/manual/#install-deno)
+ [Install deno kernel](https://docs.deno.com/runtime/manual/tools/jupyter/#quickstart)

```sh
# download
git clone https://github.com/oscar6echo/deno-jupyter-autoreload.git

# run
cd deno-jupyter-autoreload
jupyter lab
```

Open notebook [test-autoreload-4.ipynb](./test-autoreload-4.ipynb).  
Run it until the **STOP** cell.  
Make the change suggested in [./local/custom.ts](./local/custom.ts) then proceed.  

You can see that the method was updated while the class instance data remained unchanged.  

## Ref

Cf. <https://github.com/denoland/deno/issues/24660>
