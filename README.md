# Minimal Exapmle of Esbuild with TypeScript

```
 _____     _           _ _     _   _     
| ____|___| |__  _   _(_) | __| | (_)___ 
|  _| / __| '_ \| | | | | |/ _` | | / __|
| |___\__ \ |_) | |_| | | | (_| | | \__ \
|_____|___/_.__/ \__,_|_|_|\__,_| |_|___/
                                         
    _                                           _ _ 
   / \__      _____  ___  ___  _ __ ___   ___  | | |
  / _ \ \ /\ / / _ \/ __|/ _ \| '_ ` _ \ / _ \ | | |
 / ___ \ V  V /  __/\__ \ (_) | | | | | |  __/ |_|_|
/_/   \_\_/\_/ \___||___/\___/|_| |_| |_|\___| (_|_)
                                                    
```

This is a minimal sample to get typescript working with esbuild.

See Esbuild's official site for [documentation](https://esbuild.github.io/getting-started/).

## Gist

- `./scripts/build.js` contains the build script
  - since `esbuild` does not support multiple entry points out-of-the-box (see this [issue](https://github.com/evanw/esbuild/issues/976)), it uses the `glob` library for getting the list of source code.
- esbuild does not check types, so in the real world situation, `tsc --noEmit` will still be necessary.