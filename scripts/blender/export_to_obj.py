import bpy
import sys
import os

# read from environment variables
filepath = os.environ['OUTPUT_FILE']

# parameters
check_existing = True

# export file
bpy.ops.export_scene.obj(filepath=filepath, check_existing=check_existing)
