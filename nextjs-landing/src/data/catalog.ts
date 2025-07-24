// Metadata for demo catalog
import TwoVideo from '@/app/(examples)/(video)/2Vid/page';
import VidRecord from '@/app/(examples)/(video)/vid-record/page';
import Uncert from '@/app/(examples)/uncert/page';
// import BillDemo from '@/app/(examples)/(in-progress)/(three)/bill/page';
// import OllamaDemo from '@/app/(examples)/(in-progress)/ollama/page';
// import EditorDemo from '@/app/(examples)/(in-progress)/editor/page';
// import WorkflowTest from '@/app/(examples)/(in-progress)/(fal)/workflow-test/page';
// import PhiDemo from '@/app/(examples)/(in-progress)/(fal)/phi/page';
import TrimLineQuote from '@/app/(examples)/TrimLineQuote/page';
import ShaderPaper from '@/app/(examples)/(shader-demos)/paper/page';
import ScreenshotDemo from '@/app/(examples)/screenshot/page';
import NotionClone from '@/app/(examples)/notion-clone/page';
import AdDemo from '@/app/(examples)/ad/page';
import NodeFlowDemo from '@/app/(examples)/node-flow/page';
import Tun2DDemo from '@/app/(examples)/(graphics)/2d-tun/page';
import ConwayGame from '@/app/(examples)/(graphics)/conways-game-of-life/page';
import HiggsDemo from '@/app/(examples)/(graphics)/higgs/page';
import MarioDemo from '@/app/(examples)/(three-asset-demos)/3d-mario-character-controller/page';
import AsciiDemo from '@/app/(examples)/(three-asset-demos)/ascii/page';
import AssetVideoDemo from '@/app/(examples)/(three-asset-demos)/video/page';
import HtmlAssetDemo from '@/app/(examples)/(three-asset-demos)/html-asset/page';
// import PeeDemo from '@/app/(examples)/(three-asset-demos)/pee/page';
import ConwayAssetDemo from '@/app/(examples)/(three-asset-demos)/conway/page';
// import TrailDemo from '@/app/(examples)/(three-asset-demos)/trail/page';
import ModelViewDemo from '@/app/(examples)/(three-asset-demos)/model-view/page';
import TxtDemo from '@/app/(examples)/(three-asset-demos)/txt-demo/page';
import DemyDemo from '@/app/(examples)/(three-asset-demos)/demy/page';
import MacDemo from '@/app/(examples)/(three-asset-demos)/mac/page';
import OutlineDemo from '@/app/(examples)/(three-asset-demos)/outline/page';
import PlayDemo from '@/app/(examples)/(three-asset-demos)/play/page';
import BlobDemo from '@/app/(examples)/(three-asset-demos)/blob/page';

import type { ComponentType } from 'react';

export interface Demo {
  slug: string;
  title: string;
  description: string;
  Component: ComponentType<any>;
  /** Optional override for thumbnail image URL; defaults to `/images/demos/<slug>.png` */
  image?: string;
}

export const demos: Demo[] = [
//  { slug: '2vid', title: 'Dual Video Player', description: 'Side-by-side synchronized video playback.', Component: TwoVideo },
  { slug: 'vid-record', title: 'Video Recorder', description: 'Record and download video via webcam.', Component: VidRecord },
  { slug: 'uncert', title: 'Uncertainty Visualizer', description: 'Interactive uncertainty visualization tool.', Component: Uncert },
//   { slug: 'bill', title: '3D Bill Demo', description: 'Experiment with 3D rendering using Three.js.', Component: BillDemo },
//   { slug: 'ollama', title: 'Ollama Chat Interface', description: 'Chat interface integrated with Ollama AI.', Component: OllamaDemo },
//   { slug: 'editor', title: 'Live Code Editor', description: 'In-browser code editor with syntax highlighting.', Component: EditorDemo },
//   { slug: 'workflow-test', title: 'Workflow Pipeline Demo', description: 'Visualize and test data workflows (Fal).', Component: WorkflowTest },
//   { slug: 'phi', title: 'Phi Function Explorer', description: 'Interactive exploration of the Phi mathematical function.', Component: PhiDemo },
  { slug: 'trim-line-quote', title: 'Quote Trimmer', description: 'Automatically trim and format multiline quotes.', Component: TrimLineQuote },
  { slug: 'shader-paper', title: 'Paper Shader Effect', description: 'Shader demo simulating paper-like textures.', Component: ShaderPaper },
  { slug: 'screenshot', title: 'Screenshot Capture', description: 'Capture and download screen snapshots.', Component: ScreenshotDemo },
  { slug: 'notion-clone', title: 'Notion Clone', description: 'Simplified Notion-like workspace in React.', Component: NotionClone },
//  { slug: 'ad', title: 'Ad Component Demo', description: 'Preview ad layouts and interactions.', Component: AdDemo },
  { slug: 'node-flow', title: 'Node Flow Demo', description: 'Graph-based workflow visualization tool.', Component: NodeFlowDemo },
  { slug: '2d-tun', title: '2D Generative Graphics', description: 'Generate 2D graphics with generative algorithms.', Component: Tun2DDemo },
  { slug: 'conways-game-of-life', title: 'Conway’s Game of Life', description: 'Classic cellular automaton simulation.', Component: ConwayGame },
  { slug: 'higgs', title: 'Higgs Visualization', description: 'Particle visualization inspired by the Higgs boson.', Component: HiggsDemo },
  { slug: '3d-mario-character-controller', title: '3D Mario Character Controller', description: 'Control a 3D Mario character in the browser.', Component: MarioDemo },
  { slug: 'ascii', title: 'ASCII Art Renderer', description: 'Convert 3D models into ASCII art.', Component: AsciiDemo },
  { slug: 'video-asset', title: '3D Video Asset', description: 'Texture video content onto 3D objects.', Component: AssetVideoDemo },
  { slug: 'html-asset', title: 'HTML Asset Renderer', description: 'Render HTML pages as textures.', Component: HtmlAssetDemo },
  // { slug: 'pee', title: 'Particle Emitter Demo', description: 'Showcase interactive particle systems.', Component: PeeDemo },
  // { slug: 'conway', title: '3D Conway Simulation', description: '3D rendering of Conway’s Game of Life with Three.js.', Component: ConwayAssetDemo },
  { slug: 'model-view', title: '3D Model Viewer', description: 'Interactive 3D model viewer with controls.', Component: ModelViewDemo },
  //{ slug: 'txt-demo', title: 'Text Animation Demo', description: 'Animate and display 3D text geometry.', Component: TxtDemo },
  { slug: 'demy', title: 'Demy Algorithm Demo', description: 'Canvas-based algorithm visualization.', Component: DemyDemo },
  // { slug: 'mac', title: 'Mac UI Demo', description: 'Showcase of macOS-like UI components.', Component: MacDemo },
  { slug: 'outline', title: 'Outline Shader Demo', description: 'Demonstrate outline shader effects.', Component: OutlineDemo },
  { slug: 'play', title: 'Playground Demo', description: 'Interactive Three.js playground environment.', Component: PlayDemo },
  { slug: 'blob', title: 'Blob Animation', description: 'Organic blob shape animation with shaders.', Component: BlobDemo },
];
//   { slug: 'trail', title: 'Trail Effect Demo', description: 'Visual trail effect following cursor movement.', Component: TrailDemo },
