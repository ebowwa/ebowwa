import create from 'zustand'
import * as THREE from 'three';


interface PostProcessState {
    renderTarget: THREE.WebGLRenderTarget | null
    setRenderTarget: (renderTarget: THREE.WebGLRenderTarget) => void
}

const usePostProcessStore = create<PostProcessState>((set) => ({
    renderTarget: null,
    setRenderTarget: (renderTarget) => set({ renderTarget }),
}))

export default usePostProcessStore