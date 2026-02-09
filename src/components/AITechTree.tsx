"use client";

import React, { useCallback, useEffect,  } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  NodeProps,
  getBezierPath,
  EdgeProps,
  MarkerType,
  useReactFlow,
  ReactFlowProvider,
  Handle, // Added Handle import
  Position, // Added Position import
  BackgroundVariant ,
} from 'reactflow';

import 'reactflow/dist/style.css';
import styles from './AITechTree.module.css';

// Custom Node Component (for individual languages/frameworks outside the group)
const CustomNode = ({ data }: NodeProps<{ name: string; meta: string; isFramework?: boolean }>) => {
  return (
    <div className={styles.customNodeCard}>
      <Handle type="target" position={Position.Top} className={styles.handle} />
      <div className={styles.customNodeHeader}> {/* Use customNodeHeader */}
        <div className={styles.customNodeName}>{data.name}</div>
        {data.isFramework && <div className={styles.customNodePill}>AI-ready</div>}
      </div>
      <div className={styles.customNodeMeta}>{data.meta}</div>
      <Handle type="source" position={Position.Bottom} className={styles.handle} />
    </div>
  );
};

// --- NEW: PythonGroupNode Custom Component ---
interface PythonGroupNodeData {
  label: string;
  frameworks: { name: string; meta: string; id: string }[];
}

const PythonGroupNode = ({ data }: NodeProps<PythonGroupNodeData>) => {
  const frameworkSpacing = 10; // Spacing between framework cards

  return (
    <div className={styles.pythonGroupNode}>
      {/* Target handle at the top for incoming connections from Python */}
      <Handle type="target" position={Position.Top} className={styles.handle} />

      <div className={styles.pythonGroupLabel}>{data.label}</div>
      <div className={styles.pythonFrameworksContainer}>
        {data.frameworks.map((fw, index) => (
          // Use pythonFrameworkCard for smaller internal cards
          <div key={fw.id} className={styles.pythonFrameworkCard} style={{ marginBottom: index === data.frameworks.length - 1 ? 0 : frameworkSpacing }}>
            <div className={styles.customNodeHeader}> {/* Use customNodeHeader */}
              <div className={styles.customNodeName}>{fw.name}</div>
              <div className={styles.customNodePill}>AI-ready</div>
            </div>
            <div className={styles.customNodeMeta}>{fw.meta}</div>
          </div>
        ))}
      </div>

      {/* Source handle at the bottom for outgoing connections from the group */}
      <Handle type="source" position={Position.Bottom} className={styles.handle} />
    </div>
  );
};
// --- END NEW: PythonGroupNode Custom Component ---

// --- NEW: JavaGroupNode Custom Component ---
interface JavaGroupNodeData {
  label: string;
  frameworks: { name: string; meta: string; id: string }[];
}

const JavaGroupNode = ({ data }: NodeProps<JavaGroupNodeData>) => {
  const frameworkSpacing = 10; // Spacing between framework cards

  return (
    <div className={styles.javaGroupNode}>
      {/* Target handle at the top for incoming connections from Java */}
      <Handle type="target" position={Position.Top} className={styles.handle} />

      <div className={styles.javaGroupLabel}>{data.label}</div>
      <div className={styles.javaFrameworksContainer}>
        {data.frameworks.map((fw, index) => (
          <div key={fw.id} className={styles.javaFrameworkCard} style={{ marginBottom: index === data.frameworks.length - 1 ? 0 : frameworkSpacing }}>
            <div className={styles.customNodeHeader}>
              <div className={styles.customNodeName}>{fw.name}</div>
              <div className={styles.customNodePill}>AI-ready</div>
            </div>
            <div className={styles.customNodeMeta}>{fw.meta}</div>
          </div>
        ))}
      </div>

      {/* Source handle at the bottom for outgoing connections from the group */}
      <Handle type="source" position={Position.Bottom} className={styles.handle} />
    </div>
  );
};
// --- END NEW: JavaGroupNode Custom Component ---

// --- NEW: JavascriptGroupNode Custom Component ---
interface JavascriptGroupNodeData {
  label: string;
  frameworks: { name: string; meta: string; id: string }[];
}

const JavascriptGroupNode = ({ data }: NodeProps<JavascriptGroupNodeData>) => {
  const frameworkSpacing = 10;

  return (
    <div className={styles.javascriptGroupNode}>
      {/* Target handle at the top for incoming connections from JavaScript */}
      <Handle type="target" position={Position.Top} className={styles.handle} />

      <div className={styles.javascriptGroupLabel}>{data.label}</div>
      <div className={styles.javascriptFrameworksContainer}>
        {data.frameworks.map((fw, index) => (
          <div key={fw.id} className={styles.javascriptFrameworkCard} style={{ marginBottom: index === data.frameworks.length - 1 ? 0 : frameworkSpacing }}>
            <div className={styles.customNodeHeader}>
              <div className={styles.customNodeName}>{fw.name}</div>
              <div className={styles.customNodePill}>AI-ready</div>
            </div>
            <div className={styles.customNodeMeta}>{fw.meta}</div>
          </div>
        ))}
      </div>

      {/* Source handle at the bottom for outgoing connections from the group */}
      <Handle type="source" position={Position.Bottom} className={styles.handle} />
    </div>
  );
};
// --- END NEW: JavascriptGroupNode Custom Component ---

// --- NEW: CSharpGroupNode Custom Component ---
interface CSharpGroupNodeData {
  label: string;
  frameworks: { name: string; meta: string; id: string }[];
}

const CSharpGroupNode = ({ data }: NodeProps<CSharpGroupNodeData>) => {
  const frameworkSpacing = 10; // Spacing between framework cards

  return (
    <div className={styles.csharpGroupNode}>
      {/* Target handle at the top for incoming connections from C# */}
      <Handle type="target" position={Position.Top} className={styles.handle} />

      <div className={styles.csharpGroupLabel}>{data.label}</div>
      <div className={styles.csharpFrameworksContainer}>
        {data.frameworks.map((fw, index) => (
          <div key={fw.id} className={styles.csharpFrameworkCard} style={{ marginBottom: index === data.frameworks.length - 1 ? 0 : frameworkSpacing }}>
            <div className={styles.customNodeHeader}>
              <div className={styles.customNodeName}>{fw.name}</div>
              <div className={styles.customNodePill}>AI-ready</div>
            </div>
            <div className={styles.customNodeMeta}>{fw.meta}</div>
          </div>
        ))}
      </div>

      {/* Source handle at the bottom for outgoing connections from the group */}
      <Handle type="source" position={Position.Bottom} className={styles.handle} />
    </div>
  );
};
// --- END NEW: CSharpGroupNode Custom Component ---

// --- NEW: GoGroupNode Custom Component ---
interface GoGroupNodeData {
  label: string;
  frameworks: { name: string; meta: string; id: string }[];
}

const GoGroupNode = ({ data }: NodeProps<GoGroupNodeData>) => {
  const frameworkSpacing = 10;

  return (
    <div className={styles.goGroupNode}>
      <Handle type="target" position={Position.Top} className={styles.handle} />

      <div className={styles.goGroupLabel}>{data.label}</div>
      <div className={styles.goFrameworksContainer}>
        {data.frameworks.map((fw, index) => (
          <div key={fw.id} className={styles.goFrameworkCard} style={{ marginBottom: index === data.frameworks.length - 1 ? 0 : frameworkSpacing }}>
            <div className={styles.customNodeHeader}>
              <div className={styles.customNodeName}>{fw.name}</div>
              <div className={styles.customNodePill}>AI-ready</div>
            </div>
            <div className={styles.customNodeMeta}>{fw.meta}</div>
          </div>
        ))}
      </div>

      <Handle type="source" position={Position.Bottom} className={styles.handle} />
    </div>
  );
};
// --- END NEW: GoGroupNode Custom Component ---

// --- NEW: CppGroupNode Custom Component ---
interface CppGroupNodeData {
  label: string;
  frameworks: { name: string; meta: string; id: string }[];
}

const CppGroupNode = ({ data }: NodeProps<CppGroupNodeData>) => {
  const frameworkSpacing = 10;

  return (
    <div className={styles.cppGroupNode}>
      <Handle type="target" position={Position.Top} className={styles.handle} />

      <div className={styles.cppGroupLabel}>{data.label}</div>
      <div className={styles.cppFrameworksContainer}>
        {data.frameworks.map((fw, index) => (
          <div key={fw.id} className={styles.cppFrameworkCard} style={{ marginBottom: index === data.frameworks.length - 1 ? 0 : frameworkSpacing }}>
            <div className={styles.customNodeHeader}>
              <div className={styles.customNodeName}>{fw.name}</div>
              <div className={styles.customNodePill}>AI-ready</div>
            </div>
            <div className={styles.customNodeMeta}>{fw.meta}</div>
          </div>
        ))}
      </div>

      <Handle type="source" position={Position.Bottom} className={styles.handle} />
    </div>
  );
};
// --- END NEW: CppGroupNode Custom Component ---

// --- NEW: RustGroupNode Custom Component ---
interface RustGroupNodeData {
  label: string;
  frameworks: { name: string; meta: string; id: string }[];
}

const RustGroupNode = ({ data }: NodeProps<RustGroupNodeData>) => {
  const frameworkSpacing = 10;

  return (
    <div className={styles.rustGroupNode}>
      <Handle type="target" position={Position.Top} className={styles.handle} />

      <div className={styles.rustGroupLabel}>{data.label}</div>
      <div className={styles.rustFrameworksContainer}>
        {data.frameworks.map((fw, index) => (
          <div key={fw.id} className={styles.rustFrameworkCard} style={{ marginBottom: index === data.frameworks.length - 1 ? 0 : frameworkSpacing }}>
            <div className={styles.customNodeHeader}>
              <div className={styles.customNodeName}>{fw.name}</div>
              <div className={styles.customNodePill}>AI-ready</div>
            </div>
            <div className={styles.customNodeMeta}>{fw.meta}</div>
          </div>
        ))}
      </div>

      <Handle type="source" position={Position.Bottom} className={styles.handle} />
    </div>
  );
};
// --- END NEW: RustGroupNode Custom Component ---


// Custom Dashed Edge Component
const DashedEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        style={{ ...style, strokeDasharray: '5 5', strokeWidth: 1.5, stroke: '#9fe0ff' }} // Reverted to original style
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
    </>
  );
};

// Data for AI-focused Languages and Frameworks
const LANGUAGES_DATA: { name: string; meta: string; id: string }[] = [
  { name: 'Python', meta: 'Data science, ML, scripting, backend', id: 'python' },
  { name: 'Java', meta: 'Enterprise apps, Android, strong typing', id: 'java' },
  { name: 'JavaScript', meta: 'Web, Node.js, scripting, TypeScript', id: 'javascript' }, // Consolidated JS and TS
  { name: 'C#', meta: '.NET apps, game dev with Unity', id: 'csharp' },
  { name: 'C++', meta: 'Systems, high-performance code', id: 'cpp' },
  { name: 'Go', meta: 'Cloud services, concurrency', id: 'go' },
  { name: 'Rust', meta: 'Safe systems, performance', id: 'rust' },
];

// All Frameworks Data
const ALL_FRAMEWORKS_DATA: { name: string; meta: string; id: string }[] = [
  { name: 'React', meta: 'Component-based UI', id: 'react' },
  { name: 'Next.js', meta: 'Fullstack React framework', id: 'nextjs' },
  { name: 'Django', meta: 'Python fullstack framework', id: 'django' },
  { name: 'Flask', meta: 'Lightweight Python web', id: 'flask' },
  { name: 'Spring', meta: 'Java enterprise framework', id: 'spring' },
  { name: '.NET', meta: 'Microsoft stack', id: 'netaspnet' },
  { name: 'TensorFlow', meta: 'ML models and training', id: 'tensorflow' },
  { name: 'PyTorch', meta: 'Research and model building', id: 'pytorch' },
      { name: 'FastAPI', meta: 'Modern Python APIs', id: 'fastapi' },
      { name: 'Node.js', meta: 'Server-side JS', id: 'nodejs' },
      { name: 'MyBatis', meta: 'Persistence framework', id: 'mybatis' },
      { name: 'Elasticsearch', meta: 'Search and analytics engine', id: 'elasticsearch' },
      { name: 'Kafka', meta: 'Distributed streaming platform', id: 'kafka' },
      { name: 'Flink', meta: 'Stream processing framework', id: 'flink' },
      { name: 'HBase', meta: 'NoSQL database', id: 'hbase' },
      { name: 'Vue.js', meta: 'Progressive UI framework', id: 'vuejs' },
      { name: 'Angular', meta: 'Enterprise frontend framework', id: 'angular' },
      { name: 'Express.js', meta: 'Node.js web framework', id: 'expressjs' },
      { name: 'NestJS', meta: 'Node.js server-side framework', id: 'nestjs' },
      { name: 'Svelte', meta: 'Cybernetically enhanced web apps', id: 'svelte' },
      { name: 'Kubernetes', meta: 'Container orchestration', id: 'kubernetes' },
      { name: 'Docker', meta: 'Containerization platform', id: 'docker' },
      { name: 'Prometheus', meta: 'Monitoring system', id: 'prometheus' },
      { name: 'UE5', meta: 'Unreal Engine 5 for game dev, simulations', id: 'ue5' },
      { name: 'CUDA', meta: 'NVIDIA GPU computing platform', id: 'cuda' },
      { name: 'UV', meta: 'Fast Python package installer, built with Rust', id: 'uv' },
    ];  
  // Separate Python frameworks for the custom group node - ENSURE PYTORCH IS FIRST
  const PYTHON_FRAMEWORKS_DATA = [
    // PyTorch first
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'pytorch'),
    // Then other Python frameworks, in a desired order or just filter out PyTorch and concatenate
    ...ALL_FRAMEWORKS_DATA.filter(fw =>
      ['tensorflow', 'django', 'flask', 'fastapi'].includes(fw.id) && fw.id !== 'pytorch'
    )
  ].filter(Boolean) as { name: string; meta: string; id: string }[]; // Filter out undefined and cast
  
  // Separate Java frameworks for the custom group node
  const JAVA_FRAMEWORKS_DATA = [
    // Spring first
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'spring'),
    // Then other Java frameworks
    ...ALL_FRAMEWORKS_DATA.filter(fw =>
      ['mybatis', 'elasticsearch', 'kafka', 'flink', 'hbase'].includes(fw.id) && fw.id !== 'spring'
      )
    ].filter(Boolean) as { name: string; meta: string; id: string }[];

  // Separate JavaScript frameworks for the custom group node
  const JAVASCRIPT_FRAMEWORKS_DATA = [
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'react'),
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'nextjs'),
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'nodejs'),
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'vuejs'),
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'angular'),
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'expressjs'),
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'nestjs'),
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'svelte'),
  ].filter(Boolean) as { name: string; meta: string; id: string }[];

  // Separate C# frameworks for the custom group node
  const CSHARP_FRAMEWORKS_DATA = [
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'netaspnet'),
  ].filter(Boolean) as { name: string; meta: string; id: string }[];

  // Separate Go frameworks for the custom group node
  const GO_FRAMEWORKS_DATA = [
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'kubernetes'),
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'docker'),
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'prometheus'),
  ].filter(Boolean) as { name: string; meta: string; id: string }[];

  // Separate C++ frameworks for the custom group node
  const CPP_FRAMEWORKS_DATA = [
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'ue5'),
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'cuda'),
  ].filter(Boolean) as { name: string; meta: string; id: string }[];

  // Separate Rust frameworks for the custom group node
  const RUST_FRAMEWORKS_DATA = [
    ALL_FRAMEWORKS_DATA.find(fw => fw.id === 'uv'),
  ].filter(Boolean) as { name: string; meta: string; id: string }[];
      
      // Other Frameworks (not in Python, Java, JavaScript, Go, C++ or Rust group)
      const OTHER_FRAMEWORKS_DATA = ALL_FRAMEWORKS_DATA.filter(fw =>
        !PYTHON_FRAMEWORKS_DATA.some(pfw => pfw.id === fw.id) &&
        !JAVA_FRAMEWORKS_DATA.some(jfw => jfw.id === fw.id) &&
        !JAVASCRIPT_FRAMEWORKS_DATA.some(jsfw => jsfw.id === fw.id) &&
        !CSHARP_FRAMEWORKS_DATA.some(csfw => csfw.id === fw.id) &&
        !GO_FRAMEWORKS_DATA.some(gofw => gofw.id === fw.id) &&
        !CPP_FRAMEWORKS_DATA.some(cppfw => cppfw.id === fw.id) &&
        !RUST_FRAMEWORKS_DATA.some(rustfw => rustfw.id === fw.id)
      );
    
    // Generate Edges (Updated to reflect new data and consolidation)
    const allEdges: Edge[] = [
      // Python connection to its custom group node
      { id: 'e-python-group', source: 'python', target: 'python-group-node', type: 'dashedEdge', markerEnd: { type: MarkerType.ArrowClosed } },
    
      // Java connection to its custom group node
      { id: 'e-java-group', source: 'java', target: 'java-group-node', type: 'dashedEdge', markerEnd: { type: MarkerType.ArrowClosed } },
    
      // JavaScript connection to its custom group node
      { id: 'e-javascript-group', source: 'javascript', target: 'javascript-group-node', type: 'dashedEdge', markerEnd: { type: MarkerType.ArrowClosed } },

      // C# connection to its custom group node
      { id: 'e-csharp-group', source: 'csharp', target: 'csharp-group-node', type: 'dashedEdge', markerEnd: { type: MarkerType.ArrowClosed } },

      // Go connection to its custom group node
      { id: 'e-go-group', source: 'go', target: 'go-group-node', type: 'dashedEdge', markerEnd: { type: MarkerType.ArrowClosed } },

      // C++ connection to its custom group node
      { id: 'e-cpp-group', source: 'cpp', target: 'cpp-group-node', type: 'dashedEdge', markerEnd: { type: MarkerType.ArrowClosed } },

      // Rust connection to its custom group node
      { id: 'e-rust-group', source: 'rust', target: 'rust-group-node', type: 'dashedEdge', markerEnd: { type: MarkerType.ArrowClosed } },
    ];
    
    // Update nodeTypes to include the new PythonGroupNode and JavaGroupNode
    const nodeTypes = { customNode: CustomNode, pythonGroupNode: PythonGroupNode, javaGroupNode: JavaGroupNode, javascriptGroupNode: JavascriptGroupNode, csharpGroupNode: CSharpGroupNode, goGroupNode: GoGroupNode, cppGroupNode: CppGroupNode, rustGroupNode: RustGroupNode };
    const edgeTypes = { dashedEdge: DashedEdge };
    
    // Define custom positions for key nodes (placed before InnerAITechTree for accessibility)
    const CUSTOM_NODE_POSITIONS: { [key: string]: { x: number; y: number } } = {
      python: { x: 0, y: 0 },
      java: { x: 300, y: 0 },
      javascript: { x: 600, y: 0 },
      csharp: { x: 900, y: 0 },
      go: { x: 1200, y: 0 },
      cpp: { x: 1500, y: 0 },
      rust: { x: 1800, y: 0 },
    
      // New Python Group Node position - Adjusted to align left edge with Python
      'python-group-node': { x: 0, y: 150 }, // Position below Python
    
      // New Java Group Node position
      'java-group-node': { x: 300, y: 150 }, // Position below Java

      // New JavaScript Group Node position
      'javascript-group-node': { x: 600, y: 150 }, // Position below JavaScript

      // New C# Group Node position
      'csharp-group-node': { x: 900, y: 150 }, // Position below C#

      // New Go Group Node position
      'go-group-node': { x: 1200, y: 150 }, // Position below Go

      // New C++ Group Node position
      'cpp-group-node': { x: 1500, y: 150 }, // Position below C++

      // New Rust Group Node position
      'rust-group-node': { x: 1800, y: 150 }, // Position below Rust
    };
    
    // Inner component that uses React Flow hooks
    function InnerAITechTree() {
  // Generate Nodes using CUSTOM_NODE_POSITIONS
  const initialNodes: Node[] = [
    // Add the new Python group node
    {
      id: 'python-group-node',
      type: 'pythonGroupNode', // Use the new custom node type
      data: { label: 'Python Ecosystem', frameworks: PYTHON_FRAMEWORKS_DATA }, // Pass frameworks data
      position: CUSTOM_NODE_POSITIONS['python-group-node'] || { x: 0, y: 0 },
      // Adjusted width and height to better fit vertically stacked nodes and align with customNodeCard width
      style: { width: 200, backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px dashed #666', borderRadius: '8px' }, // Removed height
    },
    // Add the new Java group node
    {
      id: 'java-group-node',
      type: 'javaGroupNode', // Use the new custom node type
      data: { label: 'Java Ecosystem', frameworks: JAVA_FRAMEWORKS_DATA }, // Pass frameworks data
      position: CUSTOM_NODE_POSITIONS['java-group-node'] || { x: 0, y: 0 },
      style: { width: 200, backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px dashed #666', borderRadius: '8px' },
    },
    // Add the new JavaScript group node
    {
      id: 'javascript-group-node',
      type: 'javascriptGroupNode', // Use the new custom node type
      data: { label: 'JavaScript Ecosystem', frameworks: JAVASCRIPT_FRAMEWORKS_DATA }, // Pass frameworks data
      position: CUSTOM_NODE_POSITIONS['javascript-group-node'] || { x: 0, y: 0 },
      style: { width: 200, backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px dashed #666', borderRadius: '8px' },
    },
    // Add the new C# group node
    {
      id: 'csharp-group-node',
      type: 'csharpGroupNode', // Use the new custom node type
      data: { label: 'C# Ecosystem', frameworks: CSHARP_FRAMEWORKS_DATA }, // Pass frameworks data
      position: CUSTOM_NODE_POSITIONS['csharp-group-node'] || { x: 0, y: 0 },
      style: { width: 200, backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px dashed #666', borderRadius: '8px' },
    },
    // Add the new Go group node
    {
      id: 'go-group-node',
      type: 'goGroupNode', // Use the new custom node type
      data: { label: 'Go Ecosystem', frameworks: GO_FRAMEWORKS_DATA }, // Pass frameworks data
      position: CUSTOM_NODE_POSITIONS['go-group-node'] || { x: 0, y: 0 },
      style: { width: 200, backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px dashed #666', borderRadius: '8px' },
    },
    // Add the new C++ group node
    {
      id: 'cpp-group-node',
      type: 'cppGroupNode', // Use the new custom node type
      data: { label: 'C++ Ecosystem', frameworks: CPP_FRAMEWORKS_DATA }, // Pass frameworks data
      position: CUSTOM_NODE_POSITIONS['cpp-group-node'] || { x: 0, y: 0 },
      style: { width: 200, backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px dashed #666', borderRadius: '8px' },
    },
    // Add the new Rust group node
    {
      id: 'rust-group-node',
      type: 'rustGroupNode', // Use the new custom node type
      data: { label: 'Rust Ecosystem', frameworks: RUST_FRAMEWORKS_DATA }, // Pass frameworks data
      position: CUSTOM_NODE_POSITIONS['rust-group-node'] || { x: 0, y: 0 },
      style: { width: 200, backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px dashed #666', borderRadius: '8px' },
    },
    ...LANGUAGES_DATA.map((lang) => ({
      id: lang.id,
      type: 'customNode',
      data: { name: lang.name, meta: lang.meta, isFramework: false },
      position: CUSTOM_NODE_POSITIONS[lang.id] || { x: 0, y: 0 },
    })),
    // Only add OTHER_FRAMEWORKS_DATA as React Flow nodes
    ...OTHER_FRAMEWORKS_DATA.map((fw) => ({
      id: fw.id,
      type: 'customNode',
      data: { name: fw.name, meta: fw.meta, isFramework: true },
      position: CUSTOM_NODE_POSITIONS[fw.id] || { x: 0, y: 0 },
    })),
  ];


  const [nodes,, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(allEdges);

  const { setViewport } = useReactFlow();

  useEffect(() => {
    setViewport({ x: 0, y: 0, zoom: 1 }); // Adjust initial zoom level to fit more
  }, [setViewport]);

  const onConnect = useCallback(
    (params: Connection | Edge) => {
      const newEdge = {
        ...params,
        type: 'dashedEdge',
        markerEnd: { type: MarkerType.ArrowClosed },
        style: { strokeWidth: 1.5, stroke: '#9fe0ff' },
      };
      setEdges((eds) => addEdge(newEdge, eds));
    },
    [setEdges]
  );

  const onEdgeDoubleClick = useCallback((event: React.MouseEvent, edge: Edge) => {
    event.preventDefault();
    setEdges((eds) => eds.filter((e) => e.id !== edge.id));
  }, [setEdges]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onEdgeDoubleClick={onEdgeDoubleClick}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
    >
      <MiniMap />
      <Controls />
      <Background variant={BackgroundVariant.Dots} gap={12} size={1} 
/>
    </ReactFlow>
  );
}

// Main AITechTree component that provides the ReactFlowProvider
function AITechTree() {
  return (
    <div className={styles.flowContainer}>
      <ReactFlowProvider>
        <InnerAITechTree />
      </ReactFlowProvider>
    </div>
  );
}

export default AITechTree;