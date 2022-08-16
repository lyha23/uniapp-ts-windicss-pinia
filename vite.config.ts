import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import windiCSS from 'vite-plugin-windicss';
import MiniProgramTailwind from '@dcasia/mini-program-tailwind-webpack-plugin/rollup';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(),
        windiCSS({  
            scan: {  
                dirs: ['.'], // 当前目录下所有文件  
                fileExtensions: ['vue', 'js', 'ts'], // 同时启用扫描vue/js/ts  
            },  
        }), 
    MiniProgramTailwind(),
  ],
});


