import { Options } from '../types';
import { ScanResult, EcosystemMonitorError, EcosystemMonitorResult } from './types';
export declare function resolveAndMonitorFacts(scans: {
    [dir: string]: ScanResult[];
}, options: Options): Promise<[EcosystemMonitorResult[], EcosystemMonitorError[]]>;
