import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Mustang(props) {
  const { nodes, materials: originalMaterials } = useGLTF(
    "/models/ford_mustang_gt_drift_spec.glb"
  );

  // Override all materials to be glossy physical materials
  const materials = useMemo(() => {
    const glossyMaterials = {};
    for (const [key, mat] of Object.entries(originalMaterials)) {
      if (mat.isMaterial) {
        const glossyMat = new THREE.MeshPhysicalMaterial({
          color: mat.color ? mat.color.clone() : new THREE.Color(0xffffff),
          metalness: 1,
          roughness: 0,
          clearcoat: 1,
          clearcoatRoughness: 0,
          envMapIntensity: 1,
          map: mat.map || null,
          normalMap: mat.normalMap || null,
          // Remove maps that reduce gloss
          roughnessMap: null,
          metalnessMap: null,
          side: mat.side, // keep original side (front/back/double)
        });
        glossyMaterials[key] = glossyMat;
      }
    }
    return glossyMaterials;
  }, [originalMaterials]);

  

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 1.8, -0.5, 2]}
      scale={props.scale || 0.3}
      position={props.position || [1.3,-1,0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018BadgeA_Material}
        />
        <lineSegments
          geometry={nodes.Object_3.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018Base_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018Base_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018Base_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018EngineA_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018Grille8A_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018Grille1A_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018Grille2A_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018Grille7A_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={
            materials.Ford_MustangGTFastbackTNR0_2018LicensePlateTNRA_Material
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={
            materials.Ford_MustangGTFastbackTNR0_2018InteriorTillingColourZon_d1b82c1
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018Grille9A_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={
            materials[
              "Ford_MustangGTFastbackTNR0_2018Hood0a_Grille1_Material.001"
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018InteriorA_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018SeatBelt_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018TexturedA_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018LightA_Material}
        />
        <lineSegments
          geometry={nodes.Object_19.geometry}
          material={materials.body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.window_coloured}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018Coloured_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018Coloured_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.Ford_MustangGTFastbackTNR0_2018Window_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.None}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.badge}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials.lugs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.lugs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_35.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.material_23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.material_23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials.rotor_steel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.rotor_steel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_43.geometry}
          material={materials.rotor_steel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.rotor_steel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_45.geometry}
          material={materials.spoke}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials.spoke}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_47.geometry}
          material={materials.spoke}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_48.geometry}
          material={materials.spoke}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_49.geometry}
          material={materials.spoke}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.spoke}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_51.geometry}
          material={materials.spoke}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials.spoke}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_53.geometry}
          material={materials.tire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.tire}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/ford_mustang_gt_drift_spec.glb");
