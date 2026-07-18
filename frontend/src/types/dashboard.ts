export interface DashboardAction {
    label: string;
    action: string;
    prompt: string;
}

export interface DashboardSection {
    title: string;
    actions: DashboardAction[];
}

export type DashboardContent = Record<string, DashboardSection>;