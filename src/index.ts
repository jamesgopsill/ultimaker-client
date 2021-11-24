import isIp from "is-ip"
import * as job from "./job"
import * as printer from "./printer"
import * as system from "./system"
import * as materials from "./materials"
import * as networks from "./network"
import * as history from "./history"
import * as airmanager from "./airmanager"

// Export the individual endpoints in case someone wants to use them directly
export * as UltimakerPrinterEndpoint from "./printer"
export * as UltimakerJobEndpoint from "./job"
export * as UltimakerSystemEndpoint from "./system"
export * as UltimakerMaterialsEndpoint from "./materials"
export * as UltimakerNetworksEndpoint from "./network"
export * as UltimakerHistoryEndpoint from "./history"
export * as UltimakerAirManagerEndpoint from "./airmanager"

/**
 * Create the client to interface with the Ultimaker API.
 *
 * @param ip The IP address for the printer on your local network.
 * @returns An instance of UltimakerClient
 */
export class UltimakerClient {
	/** The ip address of Ultimaker printer */
	public readonly ip: string
	public readonly baseURL: string

	/** Checks if the IP address is a valid format before creating an instance of the client. */
	constructor(ip: string) {
		if (!isIp.v4(ip)) {
			throw new TypeError("[UltimakerClient] Invalid IP address")
		}

		// TODO: Check if we can get a response from the Ultimaker.

		this.ip = ip
		this.baseURL = "http://" + this.ip
	}

	// Methods

	// ###
	// System endpoint
	// ###
	public getSystem() {
		return system.getSystem(this.baseURL)
	}

	public getSystemName() {
		return system.getSystemName(this.baseURL)
	}

	public putSystemName(name: string) {
		return system.putSystemName(this.baseURL, name)
	}

	public getSystemGUID() {
		return system.getSystemGUID(this.baseURL)
	}

	public getSystemHostname() {
		return system.getSystemHostname(this.baseURL)
	}

	public getSystemPlatform() {
		return system.getSystemPlatform(this.baseURL)
	}

	public getSystemFirmware() {
		return system.getSystemFirmware(this.baseURL)
	}

	public putSystemFirmware(updateType: system.UltimakerSystemUpdateType) {
		return system.putSystemFirmware(this.baseURL, updateType)
	}

	public getSystemFirmwareStatus() {
		return system.getSystemFirmwareStatus(this.baseURL)
	}

	public getSystemFirmwareStable() {
		return system.getSystemFirmwareStable(this.baseURL)
	}

	public getSystemFirmwareTesting() {
		return system.getSystemFirmwareTesting(this.baseURL)
	}

	public getSystemMemory() {
		return system.getSystemMemory(this.baseURL)
	}

	public getSystemTime() {
		return system.getSystemTime(this.baseURL)
	}

	public getSystemLog(boot: number = 0, lines: number = 50) {
		return system.getSystemLog(this.baseURL, boot, lines)
	}

	public getSystemCountry() {
		return system.getSystemCountry(this.baseURL)
	}

	public putSystemCountry(country: string) {
		return system.putSystemCountry(this.baseURL, country)
	}

	public getSystemLanguage() {
		return system.getSystemLanguage(this.baseURL)
	}

	public getSystemUpTime() {
		return system.getSystemUpTime(this.baseURL)
	}

	public getSystemType() {
		return system.getSystemType(this.baseURL)
	}

	public getSystemVariant() {
		return system.getSystemVariant(this.baseURL)
	}

	public getSystemHardware() {
		return system.getSystemHardware(this.baseURL)
	}

	public getSystemHardwareTypeId() {
		return system.getSystemHardwareTypeId(this.baseURL)
	}

	public getSystemHardwareRevision() {
		return system.getSystemHardwareRevision(this.baseURL)
	}

	public putSystemDisplayMessage(message: string, buttonCaption: string) {
		return system.putSystemDisplayMessage(this.baseURL, message, buttonCaption)
	}

	// ###
	// Materials
	// ###

	public getMaterials() {
		return materials.getMaterials(this.baseURL)
	}

	public getMaterial(materialGUID: string) {
		return materials.getMaterial(this.baseURL, materialGUID)
	}

	public deleteMaterial(materialGUID: string) {
		return materials.deleteMaterial(this.baseURL, materialGUID)
	}

	public putMaterial(materialGUID: string) {
		return materials.putMaterial(this.baseURL, materialGUID)
	}

	// ###
	// Networks
	// ###

	public getNetwork() {
		return networks.getNetwork(this.baseURL)
	}

	public getWifiNetworks() {
		return networks.getWifiNetworks(this.baseURL)
	}

	public deleteWifiNetwork(ssid: string) {
		return networks.deleteWifiNetwork(this.baseURL, ssid)
	}

	public putWifiNetwork(ssid: string, passphrase: string) {
		return networks.putWifiNetwork(this.baseURL, ssid, passphrase)
	}

	// ###
	// History
	// ###

	public getJobHistory(offset: number = 0, count: number = 50) {
		return history.getJobHistory(this.baseURL, offset, count)
	}

	public getSingleJobHistory(uuid: string) {
		return history.getSingleJobHistory(this.baseURL, uuid)
	}

	public getEventHistory(offset: number = 0, count: number = 50, typeID?: number) {
		if (typeof typeID != "undefined") {
			return history.getEventHistory(this.baseURL, offset, count)
		}
		return history.getEventHistory(this.baseURL, offset, count, typeID)
	}

	public putEventHistory(typeID: number, parameters: string[]) {
		return history.putEventHistory(this.baseURL, typeID, parameters)
	}

	// ###
	// Printer
	// ###

	public getPrinter() {
		return printer.getPrinter(this.baseURL)
	}

	public getPrinterStatus() {
		return printer.getPrinterStatus(this.baseURL)
	}

	public getPrinterLED() {
		return printer.getPrinterLED(this.baseURL)
	}

	public getPrinterLEDHue() {
		return printer.getPrinterLEDHue(this.baseURL)
	}

	public getPrinterLEDSaturation() {
		return printer.getPrinterLEDSaturation(this.baseURL)
	}

	public getPrinterLEDBrightness() {
		return printer.getPrinterLEDBrightness(this.baseURL)
	}

	public getPrinterHeads() {
		return printer.getPrinterHeads(this.baseURL)
	}

	public getPrinterHead(headID: string) {
		return printer.getPrinterHead(this.baseURL, headID)
	}

	public getPrinterPosition(headID: string) {
		return printer.getPrinterHeadPosition(this.baseURL, headID)
	}

	public getPrinterHeadMaxSpeed(headID: string) {
		return printer.getPrinterHeadMaxSpeed(this.baseURL, headID)
	}

	public getPrinterHeadAcceleration(headID: string) {
		return printer.getPrinterHeadAcceleration(this.baseURL, headID)
	}

	public getPrinterHeadJerk(headID: string) {
		return printer.getPrinterHeadJerk(this.baseURL, headID)
	}

	public getPrinterHeadExtruders(headID: string) {
		return printer.getPrinterHeadExtruders(this.baseURL, headID)
	}

	public getPrinterHeadExtruder(headID: string, extruderID: string) {
		return printer.getPrinterHeadExtruder(this.baseURL, headID, extruderID)	
	}

	public getPrinterHeadExtruderHotendOffset(headID: string, extruderID: string) {
		return printer.getPrinterHeadExtruderHotendOffset(this.baseURL, headID, extruderID)
	}

	public getPrinterHeadExtruderFeeder(headID: string, extruderID: string) {
		return printer.getPrinterHeadExtruderFeeder(this.baseURL, headID, extruderID)
	}

	public getPrinterHeadExtruderFeederJerk(headID: string, extruderID: string) {
		return printer.getPrinterHeadExtruderFeederJerk(this.baseURL, headID, extruderID)
	}

	public getPrinterHeadExtruderFeederMaxSpeed(headID: string, extruderID: string) {
		return printer.getPrinterHeadExtruderFeederMaxSpeed(this.baseURL, headID, extruderID)
	}

	public getPrinterHeadExtruderFeederAcceleration(headID: string, extruderID: string) {
		return printer.getPrinterHeadExtruderFeederAcceleration(this.baseURL, headID, extruderID)
	}

	public getPrinterHeadExtruderActiveMaterial(headID: string, extruderID: string) {
		return printer.getPrinterHeadExtruderActiveMaterial(this.baseURL, headID, extruderID)
	}

	public getPrinterHeadExtruderActiveMaterialLengthRemaining(headID: string, extruderID: string) {
		return printer.getPrinterHeadExtruderActiveMaterialLengthRemaining(this.baseURL, headID, extruderID)
	}

	public getPrinterHeadExtruderActiveMaterialGUID(headID: string, extruderID: string) {
		return printer.getPrinterHeadExtruderActiveMaterialGUID(this.baseURL, headID, extruderID)
	}

	public getPrinterHeadExtruderHotend(headID: string, extruderID: string) {
		return printer.getPrinterHeadExtruderHotend(this.baseURL, headID, extruderID)
	}

	public getPrinterHeadExtruderHotendTemperature(headID: string, extruderID: string) {
		return printer.getPrinterHeadExtruderHotendTemperature(this.baseURL, headID, extruderID)
	}

	public getPrinterBed() {
		return printer.getPrinterBed(this.baseURL)
	}

	public getPrinterBedTemperature() {
		return printer.getPrinterBedTemperature(this.baseURL)
	}

	public getPrinterBedPreHeat() {
		return printer.getPrinterBedPreHeat(this.baseURL)
	}

	public getPrinterBedType() {
		return printer.getPrinterBedType(this.baseURL)
	}

	public postPrinterBlink(frequency: number, count: number) {
		return printer.postPrinterBlink(this.baseURL, frequency, count)
	}

	public putPrinterLED(color: {
		hue: number
		saturation: number
		brightness: number
	}) {
		return printer.putPrinterLED(this.baseURL, color)
	}

	// ###
	// Job
	// ###

	public postJob(jobname: string, gcode: string) {
		return job.postJob(this.baseURL, jobname, gcode)
	}

	public putJob(target: job.UltimakerJobTargetState) {
		return job.putJobState(this.baseURL, target)
	}

	public getJobDateTimeCleaned() {
		return job.getJobDateTimeCleaned(this.baseURL)
	}

	public getJobDateTimeFinished() {
		return job.getJobDateTimeFinished(this.baseURL)
	}

	public getJobDateTimeStarted() {
		return job.getJobDateTimeStarted(this.baseURL)
	}

	public getJobName() {
		return job.getJobName(this.baseURL)
	}

	public getJobPauseSource() {
		return job.getJobPauseSource(this.baseURL)
	}

	public getJobProgress() {
		return job.getJobProgress(this.baseURL)
	}

	public getJobReprintOriginalUUID() {
		return job.getJobReprintOriginalUUID(this.baseURL)
	}

	public getJobResult() {
		return job.getJobResult(this.baseURL)
	}

	public getJobSourceApplication() {
		return job.getJobSourceApplication(this.baseURL)
	}

	public getJobSourceUser() {
		return job.getJobSourceUser(this.baseURL)
	}

	public getJobSource() {
		return job.getJobSource(this.baseURL)
	}

	public getJobState() {
		return job.getJobState(this.baseURL)
	}

	public getJobTimeElapsed() {
		return job.getJobTimeElapsed(this.baseURL)
	}

	public getJobTimeTotal() {
		return job.getJobTimeTotal(this.baseURL)
	}

	public getJobUUID() {
		return job.getJobUUID(this.baseURL)
	}

	public getJob() {
		return job.getJob(this.baseURL)
	}

	// ###
	// AirManager
	// ###

	public getAirManager() {
		return airmanager.getAirManager(this.baseURL)
	}

}
