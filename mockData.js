// Mock data for Windows 95 item hunt game
export const mockItems = [
  { id: 1, name: "Recycle Bin", icon: "🗑️", x: 85, y: 15 },
  { id: 2, name: "My Computer", icon: "💻", x: 15, y: 20 },
  { id: 3, name: "Floppy Disk", icon: "💾", x: 70, y: 30 },
  { id: 4, name: "CD-ROM", icon: "💿", x: 25, y: 60 },
  { id: 5, name: "Folder", icon: "📁", x: 80, y: 70 },
  { id: 6, name: "Text File", icon: "📄", x: 45, y: 25 },
  { id: 7, name: "Calculator", icon: "🧮", x: 60, y: 50 },
  { id: 8, name: "Paint Brush", icon: "🎨", x: 30, y: 80 },
  { id: 9, name: "Music Note", icon: "🎵", x: 75, y: 45 },
  { id: 10, name: "Game Disk", icon: "🕹️", x: 50, y: 75 },
  { id: 11, name: "Email", icon: "📧", x: 35, y: 35 },
  { id: 12, name: "Phone", icon: "📞", x: 90, y: 60 },
  { id: 13, name: "Clock", icon: "🕐", x: 20, y: 45 },
  { id: 14, name: "Key", icon: "🔑", x: 65, y: 20 },
  { id: 15, name: "Lightbulb", icon: "💡", x: 40, y: 55 }
];

export const gameStats = {
  totalItems: mockItems.length,
  timeLimit: 60,
  pointsPerItem: 10
};