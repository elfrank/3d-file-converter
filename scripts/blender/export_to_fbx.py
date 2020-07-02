import bpy
import sys
import os

# read from environment variables
filepath = os.environ['OUTPUT_FILE']

# parameters
axis_forward = '-Z'
axis_up = 'Y'

# export file
bpy.ops.export_scene.fbx(filepath=filepath, axis_forward=axis_forward, axis_up=axis_up)
