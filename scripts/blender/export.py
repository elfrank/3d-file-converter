import bpy
import sys
import os

# read from environment variables
output_file_path = os.environ["OUTPUT_FILE_PATH"]
output_file_format = os.environ["OUTPUT_FILE_FORMAT"]
input_file_path = os.environ["INPUT_FILE_PATH"]
input_file_format = os.environ["INPUT_FILE_FORMAT"]

#--------------------------------------------------------------------
# Enable Plugins
#--------------------------------------------------------------------
from addon_utils import check, enable
bpy.ops.wm.read_factory_settings(use_empty=True)
for addon in ("io_export_dxf", "io_scene_gltf2"):
  default, enabled = check(addon)
  if not enabled:
    enable(addon, default_set=True, persistent=True)

#--------------------------------------------------------------------
# Sanity Checks
#--------------------------------------------------------------------

if input_file_format == output_file_format:
  # do something, same format
  print("same format")

#--------------------------------------------------------------------
# Load 3D File from path
#--------------------------------------------------------------------

if input_file_format == "obj":
  bpy.ops.import_scene.obj(filepath=input_file_path)
if input_file_format == "fbx":
  bpy.ops.import_scene.fbx(filepath=input_file_path)
if input_file_format == "gltf":
   bpy.ops.import_scene.gltf(filepath=input_file_path)

#--------------------------------------------------------------------
# Export 3D File
#--------------------------------------------------------------------

if output_file_format == "fbx":
  bpy.ops.export_scene.fbx(filepath=output_file_path, axis_forward="-Z", axis_up="Y")

if output_file_format == "obj":
  bpy.ops.export_scene.obj(filepath=output_file_path, check_existing=True)

if output_file_format == "glb":
  bpy.ops.export_scene.gltf(filepath=output_file_path, export_format="GLB")

if output_file_format == "gltf":
  bpy.ops.export_scene.gltf(filepath=output_file_path, export_format="GLTF_EMBEDDED")

if output_file_format == "dxf":
  bpy.ops.export.dxf(
    filepath=output_file_path,
    projectionThrough="NO",
    onlySelected=False,
    apply_modifiers=True,
    mesh_as="3DFACEs",
    entitylayer_from="obj.data.name",
    entitycolor_from="default_COLOR",
    entityltype_from="CONTINUOUS",
    layerName_from="LAYERNAME_DEF",
    verbose=True
  )
