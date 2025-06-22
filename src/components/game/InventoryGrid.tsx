import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

interface InventoryItem {
  id: string;
  name: string;
  displayName: string;
  icon: string;
  quantity: number;
  type: string;
  description?: string;
}

interface InventoryGridProps {
  items: InventoryItem[];
  onItemClick?: (item: InventoryItem) => void;
  searchable?: boolean;
  gridColumns?: number;
}

export function InventoryGrid({ 
  items, 
  onItemClick, 
  searchable = true, 
  gridColumns = 4 
}: InventoryGridProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter(item =>
    item.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      {searchable && (
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Search inventory..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
        </div>
      )}
      
      <div 
        className={`grid gap-2 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent`}
        style={{ 
          gridTemplateColumns: `repeat(${gridColumns}, 1fr)` 
        }}
      >
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            className="p-2 hover:bg-muted/50 cursor-pointer transition-colors group relative"
            onClick={() => onItemClick?.(item)}
          >
            <div className="flex flex-col items-center space-y-1">
              {/* Item Icon - standardized size from backpack.css */}
              <div className="w-12 h-12 flex items-center justify-center bg-muted/30 rounded border">
                {item.icon.startsWith('http') || item.icon.startsWith('/') ? (
                  <img 
                    src={item.icon} 
                    alt={item.displayName}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-lg">{item.icon}</span>
                )}
              </div>
              
              {/* Item Quantity Badge */}
              {item.quantity > 1 && (
                <Badge 
                  variant="secondary" 
                  className="text-xs absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center"
                >
                  {item.quantity > 99 ? '99+' : item.quantity}
                </Badge>
              )}
              
              {/* Item Name - truncated for grid layout */}
              <div className="text-xs text-center leading-tight max-w-full">
                <div className="font-medium truncate" title={item.displayName}>
                  {item.displayName}
                </div>
                <div className="text-muted-foreground capitalize truncate" title={item.type}>
                  {item.type}
                </div>
              </div>
            </div>
            
            {/* Hover tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-popover border rounded shadow-md text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 min-w-max">
              <div className="font-medium">{item.displayName}</div>
              {item.description && (
                <div className="text-muted-foreground">{item.description}</div>
              )}
              <div className="text-muted-foreground capitalize">Type: {item.type}</div>
              {item.quantity > 1 && (
                <div className="text-muted-foreground">Quantity: {item.quantity}</div>
              )}
            </div>
          </Card>
        ))}
        
        {filteredItems.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground py-8">
            {searchTerm ? 'No items match your search' : 'Your inventory is empty'}
          </div>
        )}
      </div>
      
      {/* Inventory summary */}
      <div className="mt-2 text-xs text-muted-foreground text-center border-t pt-2">
        {filteredItems.length} / {items.length} items
        {searchTerm && ` (filtered)`}
      </div>
    </div>
  );
} 