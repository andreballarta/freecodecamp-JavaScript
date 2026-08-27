function normalizeUnits(manifest) {
  const copyManifest = {...manifest}
  if (copyManifest.unit === "lb") {
    copyManifest.unit = "kg"
    copyManifest.weight *= 0.45
    return copyManifest
  } return copyManifest
}

function validateManifest(manifest) {
  const result = {}

  if (!Object.hasOwn(manifest, "containerId")) {
    result.containerId = "Missing";
} else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    result.containerId = "Invalid";
}

  if (!Object.hasOwn(manifest, "destination")) {
    result.destination = "Missing";   
} else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    result.destination = "Invalid";
}

  if (!Object.hasOwn(manifest, "weight")) {
    result.weight = "Missing";   
} else if (manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
    result.weight = "Invalid";
} 

  if (!Object.hasOwn(manifest, "unit")) {
    result.unit = "Missing";   
} else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    result.unit = "Invalid";
} 

  if (!Object.hasOwn(manifest, "hazmat")) {
    result.hazmat = "Missing";   
} else if (typeof manifest.hazmat !== "boolean") {
    result.hazmat = "Invalid";
} 

  return result
}

function processManifest(manifest) {
  const validManifest = validateManifest(manifest)
  if (Object.keys(validManifest).length !== 0) {
    console.log(`Validation error: ${manifest.containerId}`)
    console.log(validManifest)
} else {
    const normalizedManifest = normalizeUnits(manifest)
    console.log(`Validation success: ${normalizedManifest.containerId}`)
    console.log(`Total weight: ${normalizedManifest.weight} kg`)
}
}
