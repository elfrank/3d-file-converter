import bpy
import sys
import os

from addon_utils import check, enable
bpy.ops.wm.read_factory_settings(use_empty=True)
for addon in ("io_export_dxf", "io_scene_gltf2"):
  default, enabled = check(addon)
  if not enabled:
    enable(addon, default_set=True, persistent=True)

# read from environment variables
output_filepath = os.environ['OUTPUT_FILE']
#input_filepath = os.environ['INPUT_FILE']

# parameters
verbose=True

#bpy.ops.import_scene.obj(filepath="/usr/src/app/output/myfile.obj")

# export file
bpy.ops.export.dxf(
  filepath=output_filepath,
  projectionThrough='NO',
  onlySelected=False,
  apply_modifiers=True,
  mesh_as='3DFACEs',
  entitylayer_from='obj.data.name',
  entitycolor_from='default_COLOR',
  entityltype_from='CONTINUOUS',
  layerName_from='LAYERNAME_DEF',
  verbose=verbose
)
